/*********************************************************************************************
 * Created By : Saddam Husain
 * Created Date : 02/05/2021
 * Description : Combine all reducers into root reducer that will used while configuaring store
 **********************************************************************************************/
import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import globalReducer from './global.reducer';
import apiReducer from './api.reducer';
import {reducer as notifications} from 'react-notification-system-redux';


const rootReducer = combineReducers({
    // The auth reducer manages state for authentication of user like login logout etc.
    auth: authReducer,

    // The api reducer to manage state for api related things.
    api: apiReducer,

    // The global reducer manages state for global code values.
    global: globalReducer,

    // The notification reducer used for manging nofitications of the application.
    notifications
});


export default rootReducer;