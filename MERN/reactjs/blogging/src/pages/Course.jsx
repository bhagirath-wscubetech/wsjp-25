import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses';

export default function Course() {
    const params = useParams();
    const slug = params.slug;
    const [data, setData] = useState(null);

    useEffect(
        () => {
            const d = courses.find(c => c.slug == slug);
            setData(d);
        }, [slug]
    )

    return (
        <>
            <div className='grid grid-cols-5 gap-3 p-4'>
                <div>
                    <h1 className='text-2xl my-2'>Courses</h1>
                    <ul>
                        {
                            courses.map(
                                (course, index) => {
                                    return <Link key={index} to={`/course/${course.slug}`}>
                                        <li className={`${course.slug == slug ? 'text-blue-600 font-bold' : ''}`}>{course.name}</li>
                                    </Link>
                                }
                            )
                        }
                    </ul>
                </div>
                <div className="container col-span-4 mx-auto py-8">
                    <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover md:w-48"
                                    src={data?.imageUrl}
                                    alt="Course Image"
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    Course Name
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                                    {data?.name}
                                </h2>
                                <div className="mt-4">
                                    <span className="text-gray-700">Duration:</span>
                                    <span className="ml-2">{data?.duration} months</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-gray-700">Fees:</span>
                                    <span className="ml-2">${data?.fees}</span>
                                </div>
                                <div className="mt-4">
                                    <span className="text-gray-700">Description:</span>
                                    <p className="mt-2">
                                        {data?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
