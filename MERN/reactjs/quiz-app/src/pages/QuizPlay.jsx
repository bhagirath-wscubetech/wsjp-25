import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import { Context } from '../Main';
import { useNavigate } from 'react-router-dom';


export default function QuizPlay() {
    const { user, quiz } = useContext(Context);
    const navigator = useNavigate();
    const [userAnswers, setUserAnswer] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(
        () => {
            const lsCurrent = localStorage.getItem("current");
            const lsUserAnswers = localStorage.getItem("user_answers");
            if (lsCurrent) {
                setCurrent(parseInt(lsCurrent));
            }
            if (lsUserAnswers) {
                setUserAnswer(JSON.parse(lsUserAnswers));
            }
        },
        []
    )


    const userAnswerHandler = (ans, qId) => {
        const answers = [...userAnswers];
        const item = answers.find(a => a.qId == qId);
        if (item) {
            item.ans = ans;
            setUserAnswer(answers);
        } else {
            setUserAnswer(
                [
                    ...userAnswers,
                    {
                        ans, qId
                    }
                ]
            )
        }

    }

    useEffect(
        () => {
            if (userAnswers.length != 0) {
                localStorage.setItem("user_answers", JSON.stringify(userAnswers));
            }
        }, [userAnswers]
    )
    useEffect(
        () => {
            localStorage.setItem("current", current);
        },
        [current]
    )

    useEffect(
        () => {
            const lsUser = localStorage.getItem("user");
            if (lsUser == null) {
                navigator("/login");
                // prog. 
            }
        }, [user]
    )

    const nextHandler = () => {
        setCurrent(current + 1);
    }

    const prevHandler = () => {
        setCurrent(current - 1);
    }

    return (
        <>
            <Header />
            <div className='flex justify-center h-[80vh] items-center'>
                <div className='p-3 shadow-lg w-[600px]'>
                    <QuestionBox
                        selectedAnswer={
                            userAnswers.find(ans => ans.qId == quiz[current]?.id)
                        }
                        key={quiz[current]?.id} userAnswerHandler={userAnswerHandler} data={quiz[current]} current={current} />
                    <div className='flex justify-between mt-2'>
                        <button style={{
                            visibility: current == 0 ? 'hidden' : 'visible'
                        }} className='p-3 bg-red-400 text-white' onClick={prevHandler}>Prev</button>
                        <button style={{
                            visibility: current == quiz?.length - 1 ? 'hidden' : 'visible'
                        }} className='p-3 bg-blue-400 text-white' onClick={nextHandler}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}


const QuestionBox = ({ data, current, userAnswerHandler, selectedAnswer }) => {
    const [answer, setAnswer] = useState(null);

    console.log("selectedAnswer", selectedAnswer);
    useEffect(
        () => {
            if (selectedAnswer) {
                setAnswer(selectedAnswer.ans);
            } else {
                setAnswer(null);
            }
        }, [current]
    )

    useEffect(
        () => {
            if (answer != null)
                userAnswerHandler(answer, data.id)
        }, [answer]
    )

    return <>
        <h1 className='text-2xl'>{data?.question}</h1>
        <hr className='my-3' />
        <div className={`border p-3 cursor-pointer ${answer == "a" && 'bg-blue-400 text-white'}`}
            onClick={() => setAnswer("a")}>A) {data?.option_a}</div>
        <div className={`border p-3 cursor-pointer ${answer == "b" && 'bg-blue-400 text-white'}`}
            onClick={() => setAnswer("b")}>B) {data?.option_b}</div>
        <div className={`border p-3 cursor-pointer ${answer == "c" && 'bg-blue-400 text-white'}`}
            onClick={() => setAnswer("c")}>C) {data?.option_c}</div>
        <div className={`border p-3 cursor-pointer ${answer == "d" && 'bg-blue-400 text-white'}`}
            onClick={() => setAnswer("d")}>D) {data?.option_d}</div>
    </>
}