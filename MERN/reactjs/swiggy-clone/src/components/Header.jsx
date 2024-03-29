import React, { useState } from 'react'
import Container from './Container';
import { RxCaretDown } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

export default function Header() {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div className='shadow-lg p-2 sticky top-0 bg-white z-[999]'>
            {/* Sidebar */}
            <div onClick={() => setSideBar(false)} className='fixed w-full z-[9999] h-full top-0 left-0 duration-500' style={{
                background: "rgba(0,0,0,0.6)",
                visibility: sideBar ? 'visible' : 'hidden',
                opacity: sideBar ? 1 : 0,
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[450px] h-full pl-[50px] pt-[50px] bg-white absolute duration-500' style={{
                    left: sideBar ? '0' : '-100%'
                }}>
                    <RiCloseLine fontSize={35} onClick={() => setSideBar(false)} />
                </div>
            </div>
            <Container className="flex items-center text-[#3d4152]">
                <div className='w-[35px]'>
                    <img className='w-full duration-300 hover:scale-110' src="images/logo.png" alt="" />
                </div>
                <div className='w-[310px] ml-[30px] flex items-center gap-2'>
                    <b className='border-[#3d4152] border-b-[2px]'>Other</b>
                    <span className='font-thin'>Sindhi Colony, Bani Park, Jaipur</span>
                    <RxCaretDown fontSize={25} onClick={() => setSideBar(true)} />
                </div>
            </Container>
        </div>
    )
}
