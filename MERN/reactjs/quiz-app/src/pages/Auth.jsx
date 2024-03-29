import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from '../Main';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(Context);
    const navigator = useNavigate();

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    const submitHandler = (e) => {
        const auth = getAuth();
        if (showLogin == true) {
            const email = e.target.email.value;
            const password = e.target.password.value;
            if (email != "" && password != "") {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        login(user);
                        navigator("/play-quiz");
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorMessage);
                        // ..
                    });
            }
            // login 
        } else {
            // create account
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirm_password = e.target.confirm_password.value;
            if (email != "" && password != "" && confirm_password != "") {
                if (password == confirm_password) {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed up 
                            const user = userCredential.user;
                            login(user);
                            navigator("/play-quiz");
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMsg(errorMessage);
                            // ..
                        });

                } else {
                    setErrorMsg("Password and Confirm password must match");
                }
            } else {
                setErrorMsg("Please fill all the data");
            }
        }
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {showLogin ? 'Sign in to your account' : 'Create a new account'}
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        {showLogin ? (
                            <LoginForm showPassword={showPassword} />
                        ) : (
                            <SignupForm showPassword={showPassword} />
                        )}
                        <button className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${showPassword ? 'bg-red-500' : 'bg-green-500'}`} type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                        <div className='text-md my-2 text-red-500 text-center'>{errorMsg}</div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <button
                                    type="button"
                                    onClick={toggleForm}
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {showLogin ? 'Create an account' : 'Sign in instead'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

const LoginForm = ({ showPassword }) => {
    return (
        <>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type={`${showPassword == true ? 'text' : 'password'}`}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign in
                </button>
            </div>
        </>
    );
};

const SignupForm = ({ showPassword }) => {
    return (
        <>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type={`${showPassword == true ? 'text' : 'password'}`}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="sr-only">
                        Confirm Password
                    </label>
                    <input
                        id="confirm_password"
                        name="confirm_password"
                        type={`${showPassword == true ? 'text' : 'password'}`}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign up
                </button>
            </div>
        </>
    );
};

export default Auth;
