import { createSlice } from '@reduxjs/toolkit'

import { getShoppingCenters } from './shoppingCentersServices'


const shoppingCentersSlice = createSlice({
	name: 'shoppingCenters',
	initialState: {
		centers: [],
		cities: [],
		selectedCity: '',
		selectedCenter: '',
		loading: false,
		error: false,
		errMessage: ''
	},
	reducers: {
		setSelectedCity(state, action) {
			state.selectedCity = action.payload
		},
		setSelectedCenter(state, action) {
			state.selectedCenter = state.centers.find(
				(i) => i.name === action.payload
			)
		}
	},
	extraReducers: {
		[getShoppingCenters.pending]: (state, action) => {
			state.loading = true
		},
		[getShoppingCenters.fulfilled]: (state, action) => {
			state.centers = action.payload.data
			state.cities = action.payload.cities
			state.selectedCity = action.payload.cities[0]
			state.selectedCenter = action.payload.data[0]
			state.error = false
			state.loading = false
		},
		[getShoppingCenters.rejected]: (state, { payload }) => {
			state.loading = false
			state.error = true
			state.errMessage = payload.message
		}
	}
})

export const { setSelectedCity, setSelectedCenter } =
	shoppingCentersSlice.actions

export default shoppingCentersSlice.reducer