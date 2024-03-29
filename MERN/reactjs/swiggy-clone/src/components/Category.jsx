import React, { useEffect, useState } from 'react';
import Container from "./Container";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


export default function Category() {
    const [shift, setShift] = useState(0);
    const [categoryImages, setCategoryImages] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        setCategoryImages(data);
    }

    useEffect(
        () => {
            fetchCategories()
        },
        []
    )



    const shiftChangeHandler = (flag) => {
        if (flag) {
            if (shift == categoryImages.length - 8) return false;
            setShift(shift + 3)
        } else {
            if (shift == 0) return false;
            setShift(shift - 3)
        }
    }

    return (
        <Container className="my-8">
            <div className='text-[18px] md:text-[24px] font-bold relative'>
                What's on your mind?
                <div onClick={() => shiftChangeHandler(true)} className='bg-slate-300 p-4 cursor-pointer rounded-full absolute top-0 right-0'>
                    <FaArrowRightLong fontSize={12} />
                </div>
                <div onClick={() => shiftChangeHandler(false)} className='bg-slate-300 p-4  cursor-pointer rounded-full absolute top-0 right-[60px]'>
                    <FaArrowLeftLong fontSize={12} />
                </div>
            </div>
            <div className='w-full flex overflow-x-hidden mt-3'>
                {
                    categoryImages.map(
                        (cat, index) => {
                            return <div className='w-[150px] shrink-0 duration-200' style={{
                                transform: `translateX(-${shift * 100}%)`
                            }}>
                                <img src={`http://localhost:5000/images/${cat.image}`} className='w-full' alt="" />
                            </div>
                        }
                    )
                }
            </div>
            <hr className='mt-5 border-[1.5px]' />
        </Container>
    )
}
