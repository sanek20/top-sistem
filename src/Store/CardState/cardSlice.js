import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
	name: 'card',
	initialState: {
		number: '',
		status: '',
		bonusAmount: 0,
		nextStatus: '',
		toNextStatus: 1
	},
	reducers: {
		setDataCard(state, { payload }) {
			state.number = payload?.number
			state.status = payload?.status
			state.bonusAmount = payload?.bonuses_amount
			state.nextStatus = payload?.next_status
			state.toNextStatus = payload?.to_next_status
		}
	}
})

export const { setDataCard } = cardSlice.actions

export default cardSlice.reducer