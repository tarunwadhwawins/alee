import * as types from "../types";
const initialState = { loggedIn: {}, userDetail: {} };
const authReducer = (state = initialState, actions) => {

    switch (actions.type) {

        case types.LOGIN_SUCCESS:
            return { ...state, loggedIn: actions.payload };
        case types.LOGOUT:
            return { ...state, loggedIn: actions.payload };
        case types.STORE_USER_DETAIL:
            return { ...state, userDetail: actions.payload };
        default:
            return state;
    }
}

export default authReducer;
