import React from 'react'
import Header from '../components/Header'

export default function Home() {
    return (
        <>
            <Header />
            <div className='flex justify-center items-center gap-4 h-[100vh]'>
                <button className='p-3 border border-black rounded-sm'>Play</button>
                <button className='p-3 border border-black rounded-sm'>Admin</button>
                <button className='p-3 border border-black rounded-sm'>Login</button>
            </div>
        </>
    )
}
