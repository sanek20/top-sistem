import {SET_STATUS, SET_TC} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    [SET_TC]: (state, {payload}) => ({...state, tc: {...state.tc, id: payload.id}}),
    [SET_STATUS]: (state, {payload}) => ({...state, card: {...state.card, status: payload.status}})
}

export const appReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT]
    return handler(state, action)
}