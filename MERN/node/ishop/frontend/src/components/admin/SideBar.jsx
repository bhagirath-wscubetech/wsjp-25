import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [openItemIndex, setOpenItemIndex] = useState(null);
    const items = [
        {
            name: "Dasboard",
            url: "/admin"
        },
        {
            name: "Category",
            url: null,
            subItems: [
                {
                    name: "Add",
                    path: '/admin/category/add'
                },
                {
                    name: "View",
                    path: '/admin/category/view'
                }
            ]
        },
        {
            name: "Color",
            url: null,
            subItems: [
                {
                    name: "Add",
                    path: '/admin/color/add'
                },
                {
                    name: "View",
                    path: '/admin/color/view'
                }
            ]
        },
        {
            name: "Product",
            url: null,
            subItems: [
                {
                    name: "Add",
                    path: '/admin/product/add'
                },
                {
                    name: "View",
                    path: '/admin/product/view'
                }
            ]
        },
        {
            name: "User",
            url: "/admin/user"
        },
        {
            name: "Orders",
            url: "/admin/order"
        }
    ]
    return (
        <div className="bg-gradient-to-b from-gray-700 from-40%  to-gray-400 min-h-[100vh]">
            <div className='text-center text-2xl py-3 text-white'>ISHOP Admin</div>
            <hr />
            <ul>
                {
                    items.map(
                        (item, index) => {
                            return <li key={index} className='text-white px-3 my-1'>
                                {
                                    item.url != null
                                        ? <Link to={item.url}>{item.name}</Link>
                                        : <DropDown openItemIndex={openItemIndex} setOpenItemIndex={setOpenItemIndex} {...item} index={index} />
                                }
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    )
}


const DropDown = ({ name, subItems, index, setOpenItemIndex, openItemIndex }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(
        () => {
            console.log(openItemIndex, index);
            if (openItemIndex == index) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        },
        [openItemIndex]
    )

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(
        () => {
            if (isOpen == true) {
                setOpenItemIndex(index);
            }
        },
        [isOpen]
    )
    return (
        <div>
            <button
                className="text-white rounded focus:outline-none focus:bg-gray-700"
                onClick={toggleMenu}
            >
                {name}
            </button>
            {isOpen && (
                <div className={`mt-2 bg-white shadow-lg transition-transform transform`}>
                    {
                        subItems.map(
                            (sb, i) => {
                                return <Link key={i} to={sb.path} className="block px-4 py-2 text-gray-800">
                                    {sb.name}
                                </Link>
                            }
                        )
                    }
                </div>
            )}
        </div>
    )
}