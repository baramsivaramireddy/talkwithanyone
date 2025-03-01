
'use client'

import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {


    const [token, setToken] = useState(null);

    const logIn = (newToken) => {

        setToken(newToken);

        localStorage.setItem('token', newToken);
    }


    const logOut = () => {

        setToken(null);
        localStorage.clear();
    }


    useEffect(() => {

        let token = localStorage.getItem('token');

        if (token) {
            setToken(token);
        }
        
    }, []);

    return (<>

        <UserContext.Provider value={{ token, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    </>)
}



export const useUser = () => useContext(UserContext);
