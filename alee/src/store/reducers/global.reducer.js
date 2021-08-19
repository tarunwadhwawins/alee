import * as types from "../types"
const initialState = {
    codes: {}, bookDetail: {}, myBookData: {}
};

const globalReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.STORE_GLOBAL_CODES:
            return { ...state, codes: actions.payload }
        case types.STORE_BOOK_DETAIL:
            return { ...state, bookDetail: actions.payload }
        case types.STORE_MY_BOOK_DATA:
            return { ...state, myBookData: actions.payload }
        default:
            return state;
    }
}
export default globalReducer;
