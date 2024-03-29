import React from 'react'

export default function Box(props) {

    const buttonClickHandler = () => {
        props.handler(props.name);
    }

    return (
        <div className='col-4 mt-2'>
            <div className="card p-3">
                <h5 className='mt-3'>Name: {props.name}</h5>
                <h5 className='mb-3'>Gender: {props.gender}</h5>
                <button className={`btn ${props.player == props.name ? 'btn-primary' : 'btn-success'}`}
                    onClick={buttonClickHandler}>
                    {props.player == props.name ? 'Playing' : 'Play'}
                </button>
            </div>
        </div>
    )
}
