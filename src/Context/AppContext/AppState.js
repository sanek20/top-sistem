import React, {useContext, useEffect, useReducer} from "react";
import {AppContext} from "./AppContext";
import {appReducer} from "./AppReducer";
import {SET_DATA_OF_USER, SET_DATAOFUSER, SET_LOADING, SET_STATUS, SET_TC} from "../../utils/types";
import {AuthContext} from "../AuthContext/AuthContext";

const initialState = {
    user: {
        name: 'OlgA Alexeeva',
        age: '18',
        city: '1',
        sex: 'female',
        email: 'olgaalex@mail.ru',
        phone: '+79233478472',
        avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
        cashbackPercent: 4,
    },
    card: {
        number: '9387029846758735',
        status: 'manager',
        bonusAmount: 2345,
        nextStatus: '',
        toNextStatus: 1
    },
    tc: {
        choice: '1',
        city: '1'
    },
    loading: false
};

export const AppState = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const {userData} = useContext(AuthContext)

    const setDataOfUser = (data) => {
        console.log('APP_STATE: ', data)
        try {
            dispatch({type: SET_DATAOFUSER, payload: {...data}})
        } catch (e) {
            console.log(e)
        }
    }

    const selectTc = (id) => {
        dispatch({type: SET_TC, payload: {id: id.toString()}})
    }

    const setStatus = (status) => {
        dispatch({type: SET_STATUS, payload: {status}})
    }

    const {user, card, tc, auth} = state

    return (
        <AppContext.Provider value={{
            user, card, tc, auth,
            selectTc, setStatus, setDataOfUser,
            status: card.status
        }}>
            {children}
        </AppContext.Provider>
    )
}