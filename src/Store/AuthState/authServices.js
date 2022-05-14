import api from "../../utils/api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {setData} from "../UserState/userSlice";
import {setDataCard} from "../CardState/cardSlice";



export const signIn = createAsyncThunk(
    'auth/signIn',
    async function ({login, password}, {rejectWithValue, dispatch}) {
        try {
            const response = await api.getAuth(login, password)
            const data = response.data
            if (!!response.data.id) {
                const role = data.role.name
                const isManager = data.role.id === "2"
                localStorage.setItem('login', login)
                localStorage.setItem('password', password)
                dispatch(setData(data))
                dispatch(setDataCard(data.card))
                return {role, isManager, userData: data}
            } else {
                console.log("err")
            }
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const autoSign = createAsyncThunk(
    'auth/autoSign',
    async function(_, {dispatch}) {
        const login = localStorage.getItem('login')
        const password = localStorage.getItem('password')
        if (login && password) {
            dispatch(signIn({login, password}))
        }
    }
)


