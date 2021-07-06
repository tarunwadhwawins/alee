import * as types from "../types";

export const apiStart = (data) => {
    return { type: types.API_START, payload: data }
}
export const apiEnd = (data) => {
    return { type: types.API_END, payload: data }
}

export const accessDenied = (data) => {
    return { type: types.ACCESS_DENIED, payload: data }
}

export const apiError = (data) => {
    return { type: types.API_ERROR, payload: data }
}

export const apiCall = ({ urls = [], method = "GET", data = null, onSuccess = () => { }, onFailure = () => { }, onFinally = () => { }, headersOverride = null, showNotification = false,isFormData =false }) => {
    return { type: types.API_CALL, payload: { urls, method, data, onSuccess, onFailure, onFinally, headersOverride, showNotification,isFormData } }
}