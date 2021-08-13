import * as env from "./env.config";
// Read api url from env file
const API_URL = env.API_URL;
// API end points
const API_ENDPOINTS = {
  LOGIN: "/Authentication/Login",
  GLOBALCODELIST:"/GlobalCodes/GetGlobalCodesList",
  TEACHERREGISTRATION: "/Authentication/TeacherRegistration",
  GETTAGSLIST: "/Tags/GetTagsList",
  GETSTUDENTSLIST: "/Student/GetStudentsList",
  GETSUBSCRIPTIONPLANLIST: "/Subscription/GetSubscriptionPlanList",
  GETTEACHERSLIST: "/Teacher/GetTeachersList",
  GETUSERMANAGEMENTLIST: "/Authentication/GetUserManagementList",
  SCHOOLREGISTRATION: "/Authentication/SchoolRegistration",
  APPROVEUSERMANAGEMENT: "/Authentication/ApproveUser",
  GETBOOKSLIST: "/Books/GetBooksList",
  DELETESTUDENT: "/Student/DeleteStudent",
  STUDENTTOGGLE: "/Student/ToggleIsActive",
  SUBSCRIPTIONTOGGLE: "/Subscription/ToggleIsActive",
  DELETESUBSCRIPTION: "/Subscription/DeleteSubscription",
  TAGSDELETETAG: "/Tags/DeleteTag",
  GETLESSONPLANLIST: "/Lesson/GetLessonPlanList",
  DELETELESSONPLAN: "/Lesson/DeleteLessonPlan",
  LESSONTOGGLEISACTIVE: "/Lesson/ToggleIsActive",
  GETUSERSUBSCRIPTIONLIST: "/Subscription/GetUserSubscriptionList",
  TAGTOGGLEISACTIVE:"/Tags/ToggleIsActive",
  DELETEUSERSUBSCRIPTION:"/Subscription/DeleteUserSubscription",
  USERSUBSCRIPTIONTOGGLE:"/Subscription/UserSubscriptionToggleIsActive",
  TEACHERTOGGLE:"/Teacher/ToggleIsActive",
  DELETETEACHER:"/Teacher/DeleteTeacher",
  GETSCHOOLSLIST:"/School/GetSchoolsList",
  DELETESCHOOL:"/School/DeleteSchool",
  SCHOOLTOGGLE:"/School/ToggleIsActive",
  GETRESOURCESLIST:"/Resource/GetResourcesList",
  DELETERESOURCES:"/Resource/DeleteResources",
  RESOURCESTOGGLE:"/Resource/ToggleIsActive",
  DELETEBOOKS:"/Books/DeleteBook",
  GETGLOBALCODESLIST:"/GlobalCodes/GetGlobalCodesList",
  GETTAGLISTBYID:"/Tags/GetTagListByTagTypeId",
  POSTSUBSCRIPTION:"/Subscription/AddSubscription",
  ADDUPDATESTUDENT:"/Student/AddUpdateStudent",
  GETSUBADMINLIST:"/SubAdmin/GetSubAdminList",
  DELETESUBADMIN:"/SubAdmin/DeleteSubAdmin",
  SUBADMINTOGGLE:"/SubAdmin/ToggleIsActive",
  SUBADMINREGISTRATION:"/Authentication/SubAdminRegistration",
  UPDATESUBADMIN:"/SubAdmin/UpdateSubAdmin",
  // ADDSTUDENT:"/Student/AddUpdateStudent",
  UPLOADEXCEL:"/Teacher/UploadExcel",
  ADDTEACHEREXCEL:"/Teacher/AddTeacherFromExcel",
  ADDTEACHERBASICINFO:"/Teacher/AddTeacherBasicInfo",
   ADDUPDATERESOURCES:"/Resource/AddUpdateResources"
};

export const getApiUrl = (key) => {
  return API_URL + API_ENDPOINTS[key];
};
