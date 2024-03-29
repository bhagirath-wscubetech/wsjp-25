import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


const Context = createContext();
export default function MainContext(props) {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products')
                .then(
                    (success) => {
                        setProduct(success.data);
                    }
                ).catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    )

    /**
     * {
     *      pId: 231231,
     *      qty: 1
     * }
     */
    const addToCart = (pId) => {
        const cartData = [...cart];
        const found = cartData.find(cd => cd.pId == pId);
        if (found) {
            found.qty++;
            setCart(cartData);
        } else {
            setCart(
                [
                    ...cart,
                    {
                        pId,
                        qty: 1
                    }
                ]
            )
        }

    }

    const removeFromCart = (pId) => {
        const newCart = cart.filter(
            (item) => {
                if (item == pId) return false;
                else return true;
            }
        )
        setCart(newCart);
    }

    return (
        <Context.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context };