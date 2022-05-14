import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: 'OlgA Alexeeva',
		age: '18',
		city: '1',
		sex: 'female',
		email: 'olgaalex@mail.ru',
		phone: '+79233478472',
		avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
		cashbackPercent: 4
	},
	reducers: {
		setData(state, { payload }) {
			console.log(payload)
			state.name = payload.name
			state.age = payload.age
			state.avatar = payload.avatar
			state.cashbackPercent = payload.cashback
			state.avatar = payload.avatar_link
		}
	}
})

export const { setData } = userSlice.actions

export default userSlice.reducer