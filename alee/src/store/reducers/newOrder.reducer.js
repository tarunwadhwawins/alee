import * as types from "../types";
const initialState = [];
const newOrder = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_CUSTOMER_DETAIL:
            return { ...state, selectedCustomerDetail: action.payload }
        default:
            return state;
    }
}

export default newOrder;
