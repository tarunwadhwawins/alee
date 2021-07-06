import * as types from "../types";
const initialState = { isApiLoading: false };

const apiReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.API_START:
            return { ...state, isApiLoading :true }
            case types.API_END:
            return { ...state, isApiLoading :false }
        default:
            return state;
    }
}
export default apiReducer;
