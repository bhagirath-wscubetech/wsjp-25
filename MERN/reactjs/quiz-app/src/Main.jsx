import React, { createContext, useState } from 'react'
const Context = createContext();
export default function Main(props) {
    const [user, setUser] = useState(null);

    const login = (user_data) => {
        localStorage.setItem("user", JSON.stringify(user_data));
        setUser(user_data);
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <Context.Provider value={{ user, login, logout }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context };