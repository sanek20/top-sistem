import { createSlice } from '@reduxjs/toolkit'

import {
	autoSign,
	register,
	setAuthData,
	signIn,
	verifiedEmail
} from './authServices'


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		auth: false,
		role: '',
		isVerified: false,
		isManager: true,
		loading: false,
		error: false,
		errorMessage: '',
		userData: {}
	},
	reducers: {
		signOut(state, action) {
			state.auth = false
			state.role = ''
			state.isManager = false
			state.userData = {}
			localStorage.clear()
		},
		clearErrors(state, action) {
			state.error = false
			state.loading = false
			state.errorMessage = ''
		}
	},
	extraReducers: {
		[setAuthData.pending]: (state) => {
			state.loading = true
		},
		[setAuthData.fulfilled]: (state, { payload }) => {
			state.auth = true
			state.role = payload?.role
			state.isVerified = payload.isVerified
			state.isManager = payload?.isManager
			state.userData = { ...payload.userData }
		},
		[setAuthData.rejected]: (state, action) => {
			state.loading = false
			state.error = true
			state.errorMessage = action.payload
		},
		[signIn.pending]: (state) => {
			state.loading = true
			state.error = false
		},
		[signIn.fulfilled]: (state) => {
			state.loading = false
		},
		[signIn.rejected]: (state, action) => {
			state.error = true
			state.loading = false
			state.errorMessage = action.payload
		},
		[autoSign.rejected]: (state, action) => {
			state.error = true
			state.errorMessage = action.payload
		},
		[register.pending]: (state) => {
			state.loading = true
			state.error = false
		},
		[register.fulfilled]: (state) => {
			state.loading = false
		},
		[register.rejected]: (state, action) => {
			state.loading = false
			state.error = true
			state.errorMessage = action.payload
		},
		[verifiedEmail.pending]: (state) => {
			state.loading = true
		},
		[verifiedEmail.fulfilled]: (state, { payload }) => {
			state.isVerified = payload.success
			state.loading = false
		},
		[verifiedEmail.rejected]: (state) => {
			state.loading = false
			state.error = true
		}
	}
})

export const { signOut, clearErrors } = authSlice.actions
export default authSlice.reducer