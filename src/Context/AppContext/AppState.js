import React, {useReducer} from "react";
import {AppContext} from "./AppContext";
import {appReducer} from "./AppReducer";
import {SET_TC, TOGGLE_OPEN} from "../../utils/types";

export const AppState = ({children}) => {
    const initialState = {
        user: {
            name: 'OlgA Alexeeva',
            age: '18',
            city: '1',
            sex: 'female',
            email: 'olgaalex@mail.ru',
            phone: '+79233478472',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
        },
        card: {
            number: '9387029846758735',
            status: 'vip',
            bonusAmount: 2345
        },
        tc: {
            choice: '1',
            city: '1'
        }
    };

    const [state, dispatch] = useReducer(appReducer, initialState)

    const selectTc = (id) => {
        dispatch({type: SET_TC, payload: id.toString()})
    }

    const { user, card, tc } = state

    return (
        <AppContext.Provider value={{
            user, card, tc,
            selectTc,
        }}>
            {children}
        </AppContext.Provider>
    )
}