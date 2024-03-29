import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

export default function Main(props) {
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            setPrice(count * 600);
        }, [count]
    )

    const incHandler = () => setCount(count + 1);
    const descHandler = () => setCount(count - 1);

    return (
        // provider
        <Context.Provider value={{ price, count, incHandler, descHandler }}>
            {props.children}
        </Context.Provider>
    )
}


export { Context };