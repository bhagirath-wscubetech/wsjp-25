import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import Card from './Card';

export default function TopRestaurant() {
    const [shift, setShift] = useState(0);
    const [topRestaurants, setTopRestaurants] = useState([]);

    const fetchTopRestaurants = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const data = await response.json();
        setTopRestaurants(data);
    }

    useEffect(
        () => {
            fetchTopRestaurants()
        },
        []
    )


    const shiftChangeHandler = (flag) => {
        if (flag) {
            if (shift == topRestaurants.length - 3) return false;
            setShift(shift + 2)
        } else {
            if (shift == 0) return false;
            setShift(shift - 2)
        }
    }
    return (
        <Container>
            <div className='text-[18px] md:text-[24px] font-bold relative'>
                Top restaurant chains in Jaipur
                <div onClick={() => shiftChangeHandler(true)} className='bg-slate-300 p-4 cursor-pointer rounded-full absolute top-0 right-0'>
                    <FaArrowRightLong fontSize={12} />
                </div>
                <div onClick={() => shiftChangeHandler(false)} className='bg-slate-300 p-4  cursor-pointer rounded-full absolute top-0 right-[60px]'>
                    <FaArrowLeftLong fontSize={12} />
                </div>
            </div>
            <div className="flex gap-10 my-5 overflow-hidden">
                {
                    topRestaurants.map(
                        (item, index) => {
                            return <Card width="sm:w-[25%] w-[100%]" key={index} style={{
                                transform: `translateX(-${100 * shift}%)`
                            }} {...item} />
                        }
                    )
                }

            </div>
            <hr className='mt-5 border-[1.5px]' />
        </Container>
    )
}
