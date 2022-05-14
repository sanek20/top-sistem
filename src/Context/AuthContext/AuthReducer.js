import {SET_AUTH, SET_ERROR, SET_LOADING, SIGN_OUT} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    [SET_AUTH]: (state, {payload}) => ({...state, auth: true, ...payload}),
    [SET_ERROR]: state => ({...state, error: true, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [SIGN_OUT]: state => ({...state, loading: false, error: false, auth: false, userData: {}})
}

export const authReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT]
    return handler(state, action)
}