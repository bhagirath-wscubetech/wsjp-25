import React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

// gulsan as golu

export default function Form() {

    const formValidation = (form_inputs) => {
        const data = {};
        for (let inp of form_inputs) {
            // console.log(inp.name, inp.value);
            if (inp.value == "") {
                if (inp.nextElementSibling) {
                    inp.nextElementSibling.innerText = "Please fill the data";
                }
            } else {
                if (inp.nextElementSibling) {
                    data[inp.name] = inp.value;
                    // data[email] = inp.value;
                    // data[password] = inp.value;
                    inp.nextElementSibling.innerText = "";
                }
            }
        }
        return data;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const data = formValidation(e.target);
        if (data.name != "" && data.email != "" && data.contact != "") {
            const db = getDatabase();
            const user_id = uuidv4();
            set(
                ref(db, "students/" + user_id),
                data
            )
            e.target.reset();
        }
    }

    return (
        <div>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                action="#"
                method="post"
                onSubmit={formSubmitHandler}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        required=""
                    />
                    <span className='text-red-600'></span>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        required=""
                    />
                    <span className='text-red-600'></span>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="contact"
                    >
                        Contact
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contact"
                        type="text"
                        name='contact'
                        placeholder="Your Contact"
                        required=""
                    />
                    <span className='text-red-600'></span>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        name='button'
                        defaultValue={"Save"}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
