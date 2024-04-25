import React from 'react'
import Card from '../../../components/admin/Card'
import { Link } from 'react-router-dom'
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function View() {
    return (
        <Card>
            <div>
                <Link to={"/admin"}>Dashboard</Link> / Category
            </div>
            <hr className='my-2' />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 px-4 py-2">#</th>
                            <th className="border border-gray-200 px-4 py-2">Name</th>
                            <th className="border border-gray-200 px-4 py-2">Slug</th>
                            <th className="border border-gray-200 px-4 py-2">Image</th>
                            <th className="border border-gray-200 px-4 py-2">Status</th>
                            <th className="border border-gray-200 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="border border-gray-200 px-4 py-2">1</td>
                            <td className="border border-gray-200 px-4 py-2">Item Name</td>
                            <td className="border border-gray-200 px-4 py-2">item-name</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <img src="image.jpg" alt="Image" className="w-12 h-12" />
                            </td>
                            <td className="border border-gray-200 px-4 py-2">Active</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <FaPencil className='inline mx-2' />
                                <MdDelete className='inline mx-2' />
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

        </Card>
    )
}
