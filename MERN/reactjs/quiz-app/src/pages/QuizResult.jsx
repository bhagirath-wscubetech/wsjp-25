import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Main'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function QuizResult() {
    const { quiz } = useContext(Context);
    const [result, setResult] = useState({});
    const navigator = useNavigate();
    useEffect(
        () => {
            const lsUserAnswers = localStorage.getItem("user_answers");
            let marks = 0, negative = 0;
            if (lsUserAnswers) {
                JSON.parse(lsUserAnswers).map(
                    (user_ans) => {
                        // console.log(user_ans.qId);
                        const found = quiz.find(q => q.id == user_ans.qId);
                        if (found) {
                            if (found.answer == user_ans.ans) {
                                marks++;
                            } else {
                                negative += 0.25;
                            }
                        }
                    }
                )
                setResult({
                    marks,
                    negative,
                })
            }
        },
        [quiz]
    )
    const playAgain = () => {
        localStorage.removeItem("current");
        localStorage.removeItem("user_answers");
        navigator("/play-quiz");

    }
    return (
        <>
            <Header />
            <div className="text-center w-[400px] p-3 bg-white shadow rounded">
                <h3 className='text-3xl'>Max Marks: {quiz.length}</h3>
                <h2 className='text-2xl my-3'>Your score: {result.marks - result.negative}</h2>
                <div>
                    Marks:{result.marks} <br/>
                    Negative:{result.negative}
                </div>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </>
    )
}
