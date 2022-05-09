import {TOGGLE_OPEN} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    TOGGLE_OPEN: state => ({...state, open: !state.open}),
    SET_TC: (state, payload) => ({...state, tc: {...state.tc, id: payload.id}})
}

export const appReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT]
    return handler(state, action)
}