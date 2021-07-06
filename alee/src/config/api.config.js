import * as env from './env.config';

// Read api url from env file
const API_URL = env.API_URL;

// API end points 
const API_ENDPOINTS = {
    LOGIN: "/Auth/Login",
    GETCRMDATA: "/Subscription/GetCRMData",
    GETBUSINESSSUBSCRIPTION: "/Subscription/GetBusinessSubscription",
    GETSUBSCRIPTION: "/Subscription/GetSubscription",
    UPDATECRMACTION: "/Subscription/UpdateCRMAction",
    GETDASHBOARDORDERBYMONTHGRAPH: "/SuperAdminDashboard/GetDashboardOrderByMonthGraph",
    UPDATEBUSINESSSUBSCRIPTIONTOGGLE: "/Subscription/UpdateBusinessSubscriptionToggle",
    GLOBALCODE: "/GlobalCode",
    UPDATEBUSINESSTOGGLE: "/Subscription/UpdateBusinessToggle",
    ADDFAQ: "/FAQ/AddFAQ",
    UPDATEFAQ: "/FAQ/UpdateFAQ",
    FAQTOGGLE: "/Toggle/FAQToggle",
    DELETEFAQ: "/FAQ/DeleteFAQ",
    GETFAQ: "/FAQ/GetFAQ",
    GETFAQLIST: "/FAQ/GetFAQList",
    GETBUSINESSDETAIL: "/Business/GetBusinessDetail",
    GETDASHBOARDSIGNUPGRAPH: "/SuperAdminDashboard/GetDashboardSignUpGraph",
    GETDASHBOARDREVENUEPERMONTHGRAPH: "/SuperAdminDashboard/GetDashboardRevenuePerMonthGraph",
    GETDASHBOARDBUSINESSACTIVITYGRAPH: "/SuperAdminDashboard/GetDashboardBusinessActivityGraph",
    GETDASHBOARDREVENUEPIEGRAPH: "/SuperAdminDashboard/GetDashboardRevenuePieGraph",
    GETSUBSCRIPTIONPACKAGE: "/Subscription/GetSubscriptionPackage",
    UPDATESUBSCRIPTIONTOGGLE: "/Subscription/UpdateSubscriptionToggle",
    GETDASHBOARDTOTALSALE: "/Dashboard/GetDashBoardTotalSale",
    COMMONGRID: "/UserGridColumn/GetUserGridSystem",
    GETCUSTOMFIELD: "/Custom/GetCustomTField",
    POSTCOMMONTABLE: "/UserGridColumn/AddGridColumns",
    POSTCUSTOMFIELD: "/Custom/AddCustomField",
    UPDATECOUNTER: "/Order/UpdateCounter",
};
export const getApiUrl = key => {
    return API_URL + API_ENDPOINTS[key];
};