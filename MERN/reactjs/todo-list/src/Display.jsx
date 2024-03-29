import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function Display(props) {


    return (
        <div>
            <ul id='taskBox'>
                {
                    props.tasks.map(
                        (item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                    <span>
                                        <IoMdClose onClick={
                                            () => {
                                                props.removeHandler(index)
                                            }
                                        } className='close-btn' fontSize={20} />
                                    </span>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}
