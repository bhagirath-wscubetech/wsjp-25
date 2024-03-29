import React from 'react'
import courses from '../data/courses'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-around items-center">
                <p>© 2024 WsCube Tech. All rights reserved.</p>
                <div>
                    <h1 className='text-2xl my-2'>Courses</h1>
                    <ul>
                        {
                            courses.map(
                                (course, index) => {
                                    return <Link key={index} to={`/course/${course.slug}`}>
                                        <li>{course.name}</li>
                                    </Link>
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </footer>

    )
}
