import React, { useContext, useEffect } from 'react'
import Header from '../components/Header';
import { Context } from '../Main';
import { useNavigate } from 'react-router-dom';


export default function QuizPlay() {
    const { user } = useContext(Context);
    const navigator = useNavigate();

    useEffect(
        () => {
            if (user == null) {
                navigator("/login");
                // prog. 
            }
        }, [user]
    )

    return (
        <>
            <Header />
        </>
    )
}
