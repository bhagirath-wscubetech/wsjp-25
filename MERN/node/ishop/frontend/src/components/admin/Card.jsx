import React from 'react'

export default function Card(props) {
    return (
        <div className='m-3 shadow p-3'>
            
            {props.children}
        </div>
    )
}
