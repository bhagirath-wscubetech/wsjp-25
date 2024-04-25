import React from 'react'
import SideBar from '../../components/admin/SideBar'
import Header from '../../components/admin/Header'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <div className='grid grid-cols-5'>
            <SideBar />
            <div className='col-span-4'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
