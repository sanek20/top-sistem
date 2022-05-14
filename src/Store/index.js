import {configureStore} from "@reduxjs/toolkit";
import userReducer from './UserState/userSlice'
import cardReducer from "./CardState/cardSlice";
import authReducer from "./AuthState/authSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        card: cardReducer,
        auth: authReducer
    }
})