import * as types from "../types"
const initialState = {
    codes: {}, schoolDetail: {}
};

const globalReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.STORE_GLOBAL_CODES:
            return { ...state, codes: actions.payload }
        case types.STORE_SCHOOL_DETAIL:
            return { ...state, schoolDetail: actions.payload }
        default:
            return state;
    }
}
export default globalReducer;
