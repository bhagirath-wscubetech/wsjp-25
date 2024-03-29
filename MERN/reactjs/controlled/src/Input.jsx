import React from 'react'

export default function Input({ page, movieName, movieNameHandler, pageChangeHandler }) {
 
    return (
        <header className='py-3 mb-5 bg-white sticky-top shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                        <input className='form-control' value={movieName} onChange={
                            (e) => {
                                movieNameHandler(e.target.value)
                            }
                        } />
                    </div>
                    <div className='col-2'>
                        <select className='form-select' value={page}
                            onChange={(e) => pageChangeHandler(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}
