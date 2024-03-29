import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Gallery() {
    return (
        <>
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Images in Gallery */}
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Gallery Image"
                        className="rounded-md"
                    />
                </div>
            </div>
        </>
    )
}
