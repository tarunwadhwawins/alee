import * as types from "../types"
const initialState = {
    codes: {}, bussinessDetail: {}, locationSelected: {},
    inventoryDetail: {}, addItemId: {}, addActivityId: {}
};

const globalReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.STORE_GLOBAL_CODES:
            return { ...state, codes: actions.payload }
        case types.STORE_BUSSINESS_DETAIL:
            return { ...state, bussinessDetail: actions.payload }
        case types.STORE_LOCATION_SELECTED:
            return { ...state, locationSelected: actions.payload }
        case types.STORE_INVENTORY_DETAIL:
            return { ...state, inventoryDetail: actions.payload }
        case types.STORE_ADDITEM_ID:
            return { ...state, addItemId: actions.payload }
        case types.STORE_ADDACTIVITY_ID:
            return { ...state, addActivityId: actions.payload }
        default:
            return state;
    }
}
export default globalReducer;
