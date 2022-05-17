import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'
import { setDataCard } from '../CardState/cardSlice'
import { setDataUser } from '../UserState/userSlice'


export const signIn = createAsyncThunk(
	'auth/signIn',
	async function ({ login, password }, { rejectWithValue, dispatch }) {
		try {
			const response = await api.getAuth(login, password)
			const data = response.data
			if (!!data.id) {
				dispatch(setAuthData({ data, login, password }))
			} else {
				throw new Error('Invalid or incorrect login or password')
			}
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const setAuthData = createAsyncThunk(
	'auth/setData',
	async ({ data, login, password }, { rejectWithValue, dispatch }) => {
		try {
			if (!!data.id) {
				const role = data?.role.name
				const isManager = data?.role.id === 2
				const isVerified = data?.is_email_verified
				if (isVerified) {
					localStorage.setItem('login', login)
					localStorage.setItem('password', password)
				}
				dispatch(setDataUser(data))
				dispatch(setDataCard(data.card))
				return { role, isManager, isVerified, userData: data }
			} else {
				throw new Error('Invalid or incorrect login or password')
			}
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const autoSign = createAsyncThunk(
	'auth/autoSign',
	async function (_, { dispatch, rejectWithValue }) {
		try {
			const login = localStorage.getItem('login')
			const password = localStorage.getItem('password')
			if (login && password) {
				dispatch(signIn({ login, password }))
			}
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const register = createAsyncThunk(
	'auth/register',
	async function (data, { rejectWithValue, dispatch }) {
		try {
			const { email, password, birth, lastName, name, sex, phone } = await data
			const response = await api.register(
				email,
				password,
				birth,
				sex,
				lastName,
				name,
				phone
			)
			const dataFromServer = response.data
			dispatch(setAuthData({ data: dataFromServer, login: email, password }))
			return true
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)
export const verifiedEmail = createAsyncThunk(
	'user/verifiedEmail',
	async ({ email, code }, { rejectWithValue, dispatch }) => {
		try {
			const res = await api.postVerifiedEmail(email, code)
			if (res?.data?.success) {
				return { success: true }
			}
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)