import React, {useReducer} from "react";
import {AppContext} from "./AppContext";
import {appReducer} from "./AppReducer";
import {SET_STATUS, SET_TC} from "../../utils/types";

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
        bonusAmount: 2345
    },
    tc: {
        choice: '1',
        city: '1'
    }
};

export const AppState = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const selectTc = (id) => {
        dispatch({type: SET_TC, payload: {id: id.toString()}})
    }

    const setStatus = (status) => {
        dispatch({type: SET_STATUS, payload: {status}})
    }

    const { user, card, tc, auth } = state

    return (
        <AppContext.Provider value={{
            user, card, tc, auth,
            selectTc, setStatus,
            status: card.status
        }}>
            {children}
        </AppContext.Provider>
    )
}