import {SET_AUTH} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    [SET_AUTH]: (state, {payload}) => ({...state, auth: true, ...payload}),
}

export const authReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT]
    return handler(state, action)
}