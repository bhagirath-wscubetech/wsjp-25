import React from 'react'

export default function EditForm({ data }) {
    console.log(data);
    const editHandler = () => {

    }
    return (
        <div className="shadow p-3">
            <h1 className='text-center my-2 text-2xl'>
                Edit Your Data
            </h1>
            <hr />
            <form className='my-3' onSubmit={editHandler}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        defaultValue={data?.name}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        defaultValue={data?.email}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Password
                    </label>
                    <input
                        defaultValue={data?.password}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Save
                </button>
            </form>
        </div>
    )
}
