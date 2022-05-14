import {SET_DATA_OF_USER, SET_DATAOFUSER, SET_LOADING, SET_STATUS, SET_TC} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    [SET_TC]: (state, {payload}) => ({...state, tc: {...state.tc, id: payload.id}}),
    [SET_STATUS]: (state, {payload}) => ({...state, card: {...state.card, status: payload.status}}),
    [SET_DATAOFUSER]: (state, {payload}) => ({
        ...state,
        user: {
            ...state.user,
            name: payload.name,
            age: payload.age,
            avatar: payload.avatar_link,
            cashback: payload.cashback || null
        },
        card: {
            ...state.card,
            number: payload.card.number,
            bonusAmount: payload.card.bonuses_amount,
            status: payload.card.status,
            nextStatus: payload.card.next_status,
            toNextStatus: payload.card.to_next_status,

        }
    })

};

export const appReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT];
    return handler(state, action);
}