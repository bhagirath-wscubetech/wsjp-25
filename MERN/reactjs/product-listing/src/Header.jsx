import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './MainContext'

export default function Header() {
    const { cart } = useContext(Context);
    return (
        <div className='bg-white shadow p-3 sticky top-0'>
            <nav className='max-w-[1200px] mx-auto flex justify-center gap-3 text-[20px]'>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>Cart ({cart.length})</Link>
            </nav>
        </div>
    )
}
