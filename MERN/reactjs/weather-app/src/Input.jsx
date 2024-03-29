import React, { useRef } from 'react'

export default function Input(props) {
    const inpRef = useRef();
    const clickHandler = () => {
        props.cityNameHandler(inpRef.current.value);
        inpRef.current.value = "";
    }
    return (
        <div className='row'>
            <div className='col-10'>
                <input ref={inpRef} type="text" className='form-control' />
            </div>
            <div className='col-2'>
                <button onClick={clickHandler} className="btn btn-primary">Search</button>
            </div>
        </div>
    )
}
