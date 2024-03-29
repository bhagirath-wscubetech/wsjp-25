import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Card from './Card'
import { RiFilterFill } from "react-icons/ri";

export default function OnlineRestaurant() {
    const [topRestaurants, setTopRestaurants] = useState([]);
    const filterRef = useRef(null);
    const parentRef = useRef(null);

    function knuthShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
        }
        return array;
    }

    const fetchTopRestaurants = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const data = await response.json();
        const shuffledArray = knuthShuffle(data);
        setTopRestaurants(shuffledArray);
    }

    useEffect(
        () => {
            fetchTopRestaurants()
        },
        []
    )

    useEffect(() => {
        const handleScroll = () => {
            if (parentRef.current) {
                const { top } = parentRef.current.getBoundingClientRect();
                if (top <= 0) {
                    // When the top of the filter component reaches the top of the viewport
                    filterRef.current.classList.add('sticky-filter');
                } else {
                    // Remove sticky class when the filter component is not at the top of the viewport
                    filterRef.current.classList.remove('sticky-filter');
                }
            }
        };
        window.addEventListener('scroll', () => {
            handleScroll();
        });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container>
            <div ref={parentRef} className='text-[18px] md:text-[24px] font-bold relative my-5'>
                Restaurants with online food delivery in Jaipur
            </div>
            <div ref={filterRef}>
                <div className='max-w-[1200px] mx-auto flex mb-4 gap-2'>
                    <div className='p-[12px] border border-[#e2e2e7]  bg-[ffffff] rounded-[18px] flex gap-2 items-center'>Filter <RiFilterFill /></div>
                    <div className='p-[12px] border border-[#e2e2e7]  bg-[ffffff] rounded-[18px]'>Sort By</div>
                    <div className='p-[12px] border border-[#e2e2e7]  bg-[ffffff] rounded-[18px]'>Fast Delivery</div>
                    <div className='p-[12px] border border-[#e2e2e7]  bg-[ffffff] rounded-[18px]'>New on Swiggy</div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    topRestaurants.map(
                        (item, index) => {
                            return <Card key={index} {...item} />
                        }
                    )
                }
            </div>
        </Container>
    )
}
