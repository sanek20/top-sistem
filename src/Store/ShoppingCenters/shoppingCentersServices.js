import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'

export const getShoppingCenters = createAsyncThunk(
	'shoppingCenters/getShoppingCenters',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.getShoppingCenters()
			const data = await response.data
			const cities = [...new Set(data.map((i) => i.city))]
			return { data, cities }
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)