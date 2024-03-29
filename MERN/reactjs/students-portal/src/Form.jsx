import React from 'react'

export default function Form(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            contact: event.target.contact.value,
            gender: event.target.gender.value,
            flag: true
        }
        // console.log(data);
        props.addUserHandler(data);
        event.target.reset();
    }

    return (
        <div className='col-4 border'>
            <h3 className='my-2 text-center'>User Registration</h3>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" placeholder="Please enter name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name='email' type="email" className="form-control" placeholder="Please enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input name='contact' type="text" className="form-control" placeholder="Please enter contact" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            defaultValue={1}
                            id="m"
                            name='gender'
                        />
                        <label className="form-check-label" htmlFor="m">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            defaultValue={0}
                            id="f"
                            name='gender'
                        />
                        <label className="form-check-label" htmlFor="f">
                            Female
                        </label>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
