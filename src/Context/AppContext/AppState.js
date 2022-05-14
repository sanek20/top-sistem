import React, { useReducer } from 'react'

import { SET_DATAOFUSER, SET_STATUS, SET_TC } from '../../utils/types'

import { AppContext } from './AppContext'
import { appReducer } from './AppReducer'


const initialState = {
	user: {
		name: 'OlgA Alexeeva',
		age: '18',
		city: '1',
		sex: 'female',
		email: 'olgaalex@mail.ru',
		phone: '+79233478472',
		avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
		cashbackPercent: 4
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
}

export const AppState = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	const setDataOfUser = (data) => {
		try {
			dispatch({ type: SET_DATAOFUSER, payload: { ...data } })
		} catch (e) {
			console.log(e)
		}
	}

	const selectTc = (id) => {
		dispatch({ type: SET_TC, payload: { id: id.toString() } })
	}

	const setStatus = (status) => {
		dispatch({ type: SET_STATUS, payload: { status } })
	}

	const { user, card, tc, auth } = state

	return (
		<AppContext.Provider
			value={{
				user,
				card,
				tc,
				auth,
				selectTc,
				setStatus,
				setDataOfUser,
				status: card.status
			}}
		>
			{children}
		</AppContext.Provider>
	)
}