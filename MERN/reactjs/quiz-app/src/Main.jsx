import React, { createContext, useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSt86MyzC_0HHGoUKhGoWBrTJ2fv1mBhw",
    authDomain: "wsjp-07-55551.firebaseapp.com",
    databaseURL: "https://wsjp-07-55551-default-rtdb.firebaseio.com",
    projectId: "wsjp-07-55551",
    storageBucket: "wsjp-07-55551.appspot.com",
    messagingSenderId: "860691503851",
    appId: "1:860691503851:web:96a96a27af9071695b7cae",
    measurementId: "G-5CRBQW6MZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Context = createContext();

export default function Main(props) {
    const [user, setUser] = useState(null);
    const [quiz, setQuiz] = useState([]);

    useEffect(
        () => {
            const lsUser = localStorage.getItem("user");
            if (lsUser) setUser(JSON.parse(lsUser));
        },
        []
    )

    const login = (user_data) => {
        localStorage.setItem("user", JSON.stringify(user_data));
        setUser(user_data);
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("user_answers");
        localStorage.removeItem("current");
        setUser(null);
    }

    useEffect(
        () => {
            const db = getDatabase();
            const starCountRef = ref(db, 'quiz');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                const dataArr = [];
                for (var k in data) {
                    dataArr.push({
                        ...data[k],
                        id: k
                    })
                }
                setQuiz(dataArr);
            });

        }, []
    )


    return (
        <Context.Provider value={{ user, login, logout, quiz }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context };