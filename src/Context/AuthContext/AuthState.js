import React, { useReducer } from 'react'

import api from '../../utils/api'
import { SET_AUTH, SET_ERROR, SET_LOADING, SIGN_OUT } from '../../utils/types'

import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


export const AuthState = ({ children }) => {
	const initialState = {
		auth: false,
		role: '',
		isManager: true,
		loading: false,
		error: false,
		userData: {}
	}
	const [state, dispatch] = useReducer(authReducer, initialState)

	const autoSignIn = () => {
		const login = localStorage.getItem('login')
		const password = localStorage.getItem('password')
		if (login && password) {
			signInState(login, password).then(() => {})
		}
	}

	const signInState = async (login, password) => {
		dispatch({ type: SET_LOADING })
		await api
			.getAuth(login, password)
			.then((res) => {
				if (res.data.id) {
					const role = res.data.role.name
					const isManager = res.data.role.id === '2'
					return { role, isManager, userData: res.data }
				} else throw Error('Неправильный e-mail или пароль')
			})
			.then(({ role, isManager, userData }) => {
				dispatch({ type: SET_AUTH, payload: { isManager, role, userData } })
			})
			.then(() => {
				// localStorage.setItem('login', login)
				// localStorage.setItem('password', password)
			})
			.catch((e) => {
				dispatch({ type: SET_ERROR })
			})
	}

	const signOut = () => {
		dispatch({ type: SET_LOADING })
		dispatch({ type: SIGN_OUT })
	}

	const { auth, role, isManager, loading, error, userData } = state

	return (
		<AuthContext.Provider
			value={{
				auth,
				role,
				isManager,
				loading,
				error,
				userData,
				signInState,
				signOut
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}