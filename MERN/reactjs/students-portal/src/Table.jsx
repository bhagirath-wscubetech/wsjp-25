import React from 'react'

export default function Table(props) {
    return (
        <div className='col-8 border'>
            <h3 className='my-2 text-center'>User Listing</h3>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.userData.map(
                            (user, index) => {
                                return <tr style={{
                                    textDecoration: user.flag ? '' : 'line-through'
                                }}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.gender == "1" ? 'Male' : 'Female'}</td>
                                    <td>
                                        <button onClick={() => props.statusChangeHandler(index)}
                                            className={`btn ${user.flag ? 'btn-outline-primary' : 'btn-outline-danger'}`}>
                                            Change status
                                        </button>
                                    </td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
