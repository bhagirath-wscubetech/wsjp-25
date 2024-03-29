import React from 'react';
import courses from '../data/courses';
import { Link } from 'react-router-dom';

export default function CourseListing() {
    return (
        <>
            <div className='my-5 text-3xl text-center'>Our Courses</div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-5 gap-3 mb-5'>
                {
                    courses.map(
                        (c, i) => {
                            return <Link key={i} to={"/course/" + c.slug}>
                                <div className='shadow p-4'>{c.name}</div>
                            </Link>
                        }
                    )
                }
            </div>
        </>
    )
}
