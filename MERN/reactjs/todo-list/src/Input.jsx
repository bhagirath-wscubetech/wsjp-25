import React, { useRef } from 'react'
import { IoIosAddCircle } from "react-icons/io";

export default function Input(props) {

    const inputRef = useRef();

    const btnHandler = () => {
        if (inputRef.current.value == "") {
            inputRef.current.focus();
        } else {
            props.addHandler(inputRef.current.value);
            inputRef.current.value = "";
        }
    }

    return (
        <div className='my-3 p-2 d-flex border input-container'>
            <input ref={inputRef} type="text" className='flex-grow-1 border-0' placeholder='Enter your task here' />
            <IoIosAddCircle onClick={btnHandler} style={{ cursor: "pointer" }} fontSize={40} />
        </div>
    )
}
