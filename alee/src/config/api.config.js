import * as env from './env.config';

// Read api url from env file
const API_URL = env.API_URL;

// API end points 
const API_ENDPOINTS = {
    LOGIN:"/Authentication/Login",
    TEACHERREGISTRATION:"/Authentication/TeacherRegistration"
    
};
export const getApiUrl = key => {
    return API_URL + API_ENDPOINTS[key];
};