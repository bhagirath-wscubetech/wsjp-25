import React from 'react'

function Button(props) {
    return (
        <button onClick={props.handler} className='btn btn-outline-primary'>
            {props.children}
        </button>
    )
}

export default Button
