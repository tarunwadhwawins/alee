import * as env from "./env.config";
// Read api url from env file
const API_URL = env.API_URL;
// API end points
                   ;
const API_ENDPOINTS = {
  LOGIN: "/Authentication/Login",
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
  TAGTOGGLEISACTIVE: "/Tags/ToggleIsActive",
  DELETEUSERSUBSCRIPTION: "/Subscription/DeleteUserSubscription",
  USERSUBSCRIPTIONTOGGLE: "/Subscription/UserSubscriptionToggleIsActive",
  TEACHERTOGGLE: "/Teacher/ToggleIsActive",
  DELETETEACHER: "/Teacher/DeleteTeacher",
  GETSCHOOLSLIST: "/School/GetSchoolsList",
  DELETESCHOOL: "/School/DeleteSchool",
  SCHOOLTOGGLE: "/School/ToggleIsActive",
  GETRESOURCESLIST: "/Resource/GetResourcesList",
  DELETERESOURCES: "/Resource/DeleteResources",
  RESOURCESTOGGLE: "/Resource/ToggleIsActive",
  DELETEBOOKS: "/Books/DeleteBook",
  GETGLOBALCODESLIST: "/GlobalCodes/GetGlobalCodesList",
  ADDTAG: "/Tags/AddTag",
  GLOBALCODELIST: "/GlobalCodes/GetGlobalCodesList",
  ADDSTUDENT: "Student/AddUpdateStudent",
  GETTAGLISTBYID: "/Tags/GetTagListByTagTypeId",
  ADDSTUDENTFORMEXCEL: "/Student/AddStudentFromExcel",
  POSTSUBSCRIPTION: "/Subscription/AddSubscription",
  ADDUPDATESTUDENT: "/Student/AddUpdateStudent",
  GETSUBADMINLIST: "/SubAdmin/GetSubAdminList",
  DELETESUBADMIN: "/SubAdmin/DeleteSubAdmin",
  SUBADMINTOGGLE: "/SubAdmin/ToggleIsActive",
  SUBADMINREGISTRATION: "/Authentication/SubAdminRegistration",
  UPDATESUBADMIN: "/SubAdmin/UpdateSubAdmin",
  UPLOADEXCEL: "/Teacher/UploadExcel",
  ADDTEACHEREXCEL: "/Teacher/AddTeacherFromExcel",
  ADDTEACHERBASICINFO: "/Teacher/AddTeacherBasicInfo",
  ADDUPDATERESOURCES: "/Resource/AddUpdateResources",
  GETEXCELTEMPLATE: "/Student/ExcelTemplate",
  GETEXCELTEMPLATETEACHER: "/Teacher/ExcelTemplate",
  GETBOOKPAGE: "/UploadPdf/GetPagesData",
  GETTAGCUSTOMFIELDS: "/BookTag/GetCustomFieldList",
  GETTAGCUSTOMFIELDSLIST: "/BookTag/GetCustomFieldDataList",
  GETADMINDASHBOARD: "/Dashboard/GetAdminDashboard",
  GETADMINDASHBOARDPERFORMANCE: "/Dashboard/GetAdminDashboardPerformance",
  ADDBOOKSUMMARY: "/Books/AddBookSummary",
  ADDTOPIC: "/Topics/AddTopic",
  GETCHAPTERSTOPIC: "/Topics/GetChaptersTopic",
  DELETETOPIC: "/Topics/DeleteTopic",
  GETBOOKSUMMARY: "/Books/GetBookSummary",
  ADDUPDATECHAPTER: "/Chapter/AddUpdateChapter",
  GETCHAPTERLIST: "/Chapter/GetChaptersList",
  ADDCHAPTERSUMMARY: "/Chapter/AddChapterSummary",
  DELETECHAPTER: "/Chapter/DeleteChapter",
  ADDGRADE: "/Grades/AddGrade",
  GETGRADESLIST: "/Grades/GetGradesList",
  DELETEGRADE: "/Grades/DeleteGrade",
  GRADESTOGGLE: "/Grades/ToggleIsActive",
  UPDATETAG: "/Tags/UpdateTag",
  ADDTEACHERQUALIFICATION: "/Teacher/AddTeacherQualification",
  GETTEACHERPROFILEDATA: "/Teacher/GetTeacherProfileData",
  GETCHAPTERPAGES: "/Chapter/GetChapterPages",
  ADDBOOKTAG: "/BookTag/AddBookTags",
  UPLOADPDF: "/UploadPdf/UploadBookPdf",
  ADDTEACHERWORKEXPERIENCE: "/Teacher/AddTeacherWorkExperience",
  ADDTEACHERSKILLS: "/Teacher/AddTeacherSkills",
  FORGOTPASSWORD: "/Authentication/ForgotPassword",
  GETTEMPLATELIST: "/Template/GetTemplateList",
  DELETETEMPLATE: "/Template/DeleteTemplate",
  TOGGLEISACTIVE: "/Template/ToggleIsActive",
  ADDTEMPLATEFIELDS: "/Template/AddTemplateFields",
  ADDUPDATETEMPLATE: "/Template/AddUpdateTemplate",
  // GETTEMPLATEFIELDSLIST: "/Template/GetTemplateFieldsList",
  GETBOOKTAGDATA: "/BookTag/GetBookTagList",
  ADDLESSONPLANDATA: "/Lesson/AddLessonPlan",
  BOOKSEARCHBYTAG: "/Books/BookSearch",
  GETASSIGNEDTEMPLATES: "/Template/GetAssignedTemplates",
  TOGGLEASSIGNEDTEMPPLATE: "/Template/ToggleAssignedTemplateIsActive",
  DELETEASSIGNEDTEMPLATE: "/Template/DeleteAssignedTemplate",
  POSTTEMPLATEASSIGNED: "/Template/Assigntemplates",
  GETASSIGNEDTEMPLATETEACHER: "/Template/GetAssignedTemplatesToTeacher",
  // GETTEMPLATELIST:"/Template/GetTemplateList",
  // DELETETEMPLATE:"/Template/DeleteTemplate",
  // TOGGLEISACTIVE:"/Template/ToggleIsActive",
  RESETPASSWORD: "/Authentication/ResetPassword",
  GETBOOKSLISTBYGRADEID: "/Books/GetBooksListByGradeId",
  DELETEPDFRESOURCES: "/Resource/DeletePdfResources",
  DELETEUSER: "/Authentication/DeleteUser",
  GETTEMPLATEFIELD: "/Template/GetTemplateFieldsList",
  CHANGEPASSWORD: "/Authentication/ChangePassword",
  UPDATESCHOOLPROFILE: "/School/UpdateSchoolProfile",
  GETLESSONPLANDATA:"/Lesson/GetLessonPlanData",
 GETTEMPLATEFIELDSLIST:"/Template/GetTemplateFieldsList"
};
export const getApiUrl = (key) => {
  return API_URL + API_ENDPOINTS[key];
};
