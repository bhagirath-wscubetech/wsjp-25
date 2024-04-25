import React from 'react'
import axios from 'axios';

export default function Table({ users, fetchUser, openToast, editUser }) {
    const delUser = (id) => {
        axios.delete("http://localhost:5000/delete/" + id)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        fetchUser();
                    } else {

                    }
                    openToast(success.data.msg, success.data.status);
                }
            ).catch(
                () => {

                }
            )
    }

    const changeStatus = (user_id, new_status) => {
        axios.patch(`http://localhost:5000/change-status/${user_id}/${new_status}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        fetchUser();
                    } else {

                    }
                    openToast(success.data.msg, success.data.status);
                }
            ).catch(
                () => {

                }
            )
    }

    return (
        <table className="w-full whitespace-nowrap border">
            <thead>
                <tr>
                    <th className="text-center font-semibold">Name</th>
                    <th className="text-center font-semibold">Email</th>
                    <th className="text-center font-semibold">Password</th>
                    <th className="text-center font-semibold">Status</th>
                    <th className="text-center font-semibold">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(
                        (user) => {
                            return (
                                <tr className='border' key={user._id}>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.password}</td>
                                    <td className="border px-4 py-2">
                                        {
                                            user.status == true ?
                                                <button onClick={() => changeStatus(user._id, false)} className='bg-green-600 text-white p-1'>
                                                    Active
                                                </button>
                                                :
                                                <button onClick={() => changeStatus(user._id, true)}
                                                    className='bg-orange-600 text-white p-1'>
                                                    Inactive
                                                </button>
                                        }
                                    </td>
                                    <td className='text-center'>
                                        <button onClick={() => delUser(user._id)} className='p-3 my-2 bg-red-600 text-white border'>Delete</button>
                                        <button onClick={() => editUser(user._id)} className='p-3 my-2 bg-blue-600 text-white border'>Edit</button>
                                    </td>
                                </tr>
                            )
                        }
                    )
                }

                {/* Additional rows can be added here */}
            </tbody>
        </table>

    )
}
