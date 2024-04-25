import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import { Context } from '../Main';
import { useNavigate } from 'react-router-dom';


export default function QuizPlay() {
    const { user, quiz } = useContext(Context);
    const overlay = useRef();
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

    const submitHandler = () => {
        overlay.current.style.display = "flex";
    }

    const yesHandler = () => {
        navigator("/quiz-result");
        overlay.current.style.display = "";
    }

    const noHandler = () => {
        overlay.current.style.display = "";
    }

    return (
        <>
            <div ref={overlay} className="overlay justify-center items-center hidden">
                <div className="text-center w-[400px] p-3 bg-white shadow rounded">
                    <h3 className='text-3xl'>{userAnswers.length} answers selected out of {quiz.length}</h3>
                    <h2 className='text-2xl my-3'>Are you sure to submit?</h2>
                    <button className='bg-green-600 p-3 mx-2 text-white' onClick={yesHandler}>Yes</button>
                    <button className='bg-red-600 p-3 mx-2 text-white' onClick={noHandler}>No</button>
                </div>
            </div>
            <Header />
            <div className='flex justify-center h-[80vh] items-center'>
                <div className='p-3 shadow-lg w-[600px]'>
                    <h3 className='text-center text-xl'>{userAnswers.length}/{quiz.length}</h3>
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
                    <button onClick={submitHandler} className='mx-auto p-3 block bg-slate-500 text-white w-full my-2'>Submit</button>
                </div>
            </div>
        </>
    )
}


const QuestionBox = ({ data, current, userAnswerHandler, selectedAnswer }) => {
    const [answer, setAnswer] = useState(null);
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
        <h1 className='text-2xl'>({current + 1}) {data?.question}</h1>
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