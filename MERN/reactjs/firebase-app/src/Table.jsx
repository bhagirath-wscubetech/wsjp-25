import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";


export default function Table() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        const db = getDatabase();
        onValue(
            ref(db, 'students'),
            (snapshot) => {
                const students_data = snapshot.val();
                console.log(students_data);
                setData(students_data);
            });
    }

    useEffect(
        fetchData,
        []
    )

    const tbody = [];
    let sr = 1;

    for (let key in data) {
        tbody.push(
            <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sr++}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data[key]?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data[key]?.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data[key]?.email}
                </td>
            </tr>
        )
    }


    return (
        <div className='col-span-3'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Sr.
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Contact
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        data?.length == 0
                            ? <tr>
                                <td colSpan={3} className='text-center p-3 text-xl animate-pulse'>Loading</td>
                            </tr>
                            :
                            tbody
                    }
                </tbody>
            </table>

        </div>
    )
}
