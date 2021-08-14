// inspired by https://leanpub.com/redux-book
import axios from "axios";
import * as types from "../types";
import * as actions from "../actions";
import * as env from '../../config/env.config';
import { getApiUrl } from '../../config/api.config';
import { Notifications } from '../../shared/functional/global-import';
// import { error } from "react-notification-system-redux";

const apiMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type !== types.API_CALL) return;

    let state = getState();
    const { urls, method, data, onSuccess, onFailure, onFinally, headers, showNotification,isFormData } = action.payload;
    // axios default configs
    axios.defaults.headers.common["Content-Type"] =  isFormData ? "multipart/form-data" :"application/json";
    // if (state.auth && state.auth.loggedIn && state.auth.loggedIn.token) {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${state.auth.loggedIn.token}`;
    // }
    if (state.auth && state.auth.userDetail && state.auth.userDetail.token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${state.auth.userDetail.token}`;
    }
    const dataOrParams = ["GET", "DELETE","PATCH"].includes(method) ? "params" : "data";


    // Application level loading start
    dispatch(actions.apiStart());

    let APIResut;
    // checking is it multiple api call
    if (urls && urls.length > 1) {
        
        // Call multiple API call using axios via Promise.all
        const fetchURL = (url) => axios.get(getApiUrl(url));
        const promiseArray = urls.map(fetchURL);
        APIResut = Promise.all(promiseArray);
    }
    else {
        // Api Call for single api
        APIResut = axios.request({ url: getApiUrl(urls[0]), method, headers, [dataOrParams]: data })
    }

    APIResut.then(response => {
        // Show notification
        if (showNotification) {
            dispatch(Notifications.success({ title: "Success", message: response.data.responseMessage, position: 'br', autoDismiss: 5 }));
        }
        // callback function
        onSuccess(response.data);
        // console sucess if environment is not in production
        if (env.NODE_ENV !== "production") {
            if (response.length > 0) {
                response.map((response, index) => {
                    return console.log('API : ' + urls[index] + ' Success response :' + JSON.stringify(response));
                });
            } else {
                return console.log('API : ' + urls[0] + ' Success response :' + JSON.stringify(response));
            }
        }
    }).catch(error => {
        // Show notification
        if (error.response && showNotification) {
            dispatch(Notifications.error({ title: "Error", message: error.response.data.responseMessage, position: 'br', autoDismiss: 5 }));
        }
        // Application level error handling 

        
        dispatch(actions.apiError(error));
        // callback function
        onFailure(error);
        // console error if environment is not in production
        if (env.NODE_ENV !== "production") {
            console.log('API : Error response :' + JSON.stringify(error));
        }
        if (error.response && error.response.status === 403) {
            dispatch(actions.accessDenied(window.location.pathname));
        }
    }).finally(() => {
        // Application level loading end
        dispatch(actions.apiEnd());
        onFinally();
    });
};

export default apiMiddleware;
