import * as types from "../types";
// import storage from "redux-persist/lib/storage";
const initialState = { loggedIn: {}, userDetail: {} };
const authReducer = (state = initialState, actions) => {
debugger;
    switch (actions.type) {
        case types.LOGIN_SUCCESS:
            return { ...state, loggedIn: actions.payload };
        case types.LOGOUT:
            {
                localStorage.removeItem('persist:root');
                localStorage.clear();
                return {};
            }
        case types.STORE_USER_DETAIL:
            return { ...state, userDetail: actions.payload };
        default:
            return state;
    }
}

export default authReducer;
