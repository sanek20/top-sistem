// noinspection JSCheckFunctionSignatures

import React, {useReducer} from "react";
import {AuthContext} from "./AuthContext";
import {authReducer} from "./AuthReducer";
import {SET_AUTH} from "../../utils/types";

export const AuthState = ({children}) => {
    const initialState = {
        auth: true,
        role: 'manager',
        isManager: true,
    };
    const [state, dispatch] = useReducer(authReducer, initialState)

    const setAuth = (role) => {
        const isManager = role === 'manager'
        dispatch({type: SET_AUTH, payload: {role, isManager}})
        console.log(state)
    }

    const { auth, role, isManager } = state

    return (
        <AuthContext.Provider value={{
            auth, role, isManager,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}