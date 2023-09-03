
import React, { createContext, useContext } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';


const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {

    const register = async (formdata) => {
        const response = await axios.post('http://localhost:4000/api/v1/auth/register/', {
            username: formdata.username,
            email: formdata.email,
            password: formdata.password
        })
        if (response.status === 200) {
            console.log(response.data)
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }


    const login = async (user) => {
        const response = await axios.post('http://localhost:4000/api/v1/auth/login/', {
            email: user.email,
            password: user.password

        })
        if (response.status === 200) {
            console.log(response.data)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }

    }

    const contextValue = {
        register,
        login
    }

    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>

    )
}
