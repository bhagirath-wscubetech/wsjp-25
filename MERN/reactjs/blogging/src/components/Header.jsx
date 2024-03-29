import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {

    const links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about-us",
            name: "About Us"
        },
        {
            path: "/gallery",
            name: "Gallery"
        },
        {
            path: "/course",
            name: "Course"
        },
        {
            path: "/contact-us",
            name: "Contact Us"
        }
    ]

    return (
        <header className="bg-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://www.wscubetech.com/images/wscube-tech-logo.svg"
                        alt="WsCube Tech Logo"
                        className="h-12"
                    />
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index}>
                                        <NavLink to={link.path} className="hover:underline">
                                            {link.name}
                                        </NavLink>
                                    </li>
                                }
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>

    )
}
