import * as env from './env.config';
// Read api url from env file
const API_URL = env.API_URL;
// API end points 
const API_ENDPOINTS = {
    LOGIN: "/Authentication/Login",
    TEACHERREGISTRATION: "/Authentication/TeacherRegistration",
    GETTAGSLIST: "/Tags/GetTagsList",
    GETSTUDENTSLIST: "/Student/GetStudentsList",
    GETSUBSCRIPTIONPLANLIST: "/Subscription/GetSubscriptionPlanList",
    GETTEACHERSLIST: "/Teacher/GetTeachersList",
    DELETETEACHER: "/Teacher/DeleteTeacher",
    TEACHERTOGGLE:"/Teacher/ToggleIsActive",
    GETUSERMANAGEMENTLIST: "/Authentication/GetUserManagementList",
    SCHOOLREGISTRATION: "/Authentication/SchoolRegistration",
    APPROVEUSERMANAGEMENT: "/Authentication/ApproveUser",
    GETBOOKSLIST: "/Books/GetBooksList",

    DELETESTUDENT: "/Student/DeleteStudent",
    STUDENTTOGGLE: "/Student/ToggleIsActive",
    GETRESOURCESLIST: "/Resource/GetResourcesList",
    GETSCHOOLSLIST: "/School/GetSchoolsList",
    TOGGLEISACTIVE: "/School/ToggleIsActive",
    DELETESCHOOL: "/School/DeleteSchool"
};
export const getApiUrl = key => {
    return API_URL + API_ENDPOINTS[key];
};