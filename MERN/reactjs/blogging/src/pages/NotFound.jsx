import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-2xl text-gray-800 mb-4">Page Not Found</p>
                <Link to="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">Go
                    Back to Home</Link>
            </div>
            <Footer />
        </>
    )
}
