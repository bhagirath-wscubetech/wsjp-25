import React from 'react'

export default function Container(props) {
    return (
        <div className={`max-w-[1200px] mx-auto ${props.className} px-3`}>
            {props.children}
        </div>
    )
}
