import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Main'

export default function Header() {
    const { user, logout } = useContext(Context);
    return (
        <div className='shadow'>
            <nav className='max-w-[1200px] mx-auto py-4'>
                <ul className='flex justify-center gap-5 w-full'>
                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        {
                            user
                                ? <span className='cursor-pointer' onClick={() => logout()}>Logout</span>
                                : <NavLink to={"/login"}>
                                    Login
                                </NavLink>
                        }

                    </li>
                    <li>
                        <NavLink to={"/admin"}>
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
