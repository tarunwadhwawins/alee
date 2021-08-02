import * as types from "../types"
const initialState = {
    codes: {}, bussinessDetail: {}
};

const globalReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.STORE_GLOBAL_CODES:
            return { ...state, codes: actions.payload }
        case types.STORE_BUSSINESS_DETAIL:
            return { ...state, bussinessDetail: actions.payload }
        default:
            return state;
    }
}
export default globalReducer;
