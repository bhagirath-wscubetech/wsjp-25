import React from 'react'

export default function ContactUs() {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg mb-4">
                Have questions or inquiries? Reach out to us using the form below:
            </p>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                        defaultValue={""}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}
