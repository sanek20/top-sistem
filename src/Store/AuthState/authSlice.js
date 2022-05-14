import {createSlice} from "@reduxjs/toolkit";
import {signIn} from "./authServices";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        role: '',
        isManager: true,
        loading: false,
        error: false,
        userData: {}
    },
    reducers: {
        signOut(state, action) {
            state.auth = false
            state.role = ''
            state.isManager = false
            state.userData = {}
        }
    },
    extraReducers: {
        [signIn.pending]: (state, action) => {
            console.log("PENDING", action.payload)
            state.loading = true;
            state.error = false
        },
        [signIn.fulfilled]: (state, {payload}) => {
            console.log('FULFILLED', payload)
            state.auth = true
            state.role = payload.role
            state.isManager = payload.isManager
            state.userData = {...payload.userData}
        },
        [signIn.rejected]: (state, action) => {
            state.error = false
            console.log('REJECTED', action.payload)
        }

    }
})

export const {signOut} = authSlice.actions
export default authSlice.reducer