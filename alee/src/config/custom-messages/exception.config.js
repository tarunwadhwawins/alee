const  EXCEPTION_MESSAGES = {
    API_NOT_AVAILABLE: "Please check your internet connection and try to refresh page."
}
export const getExceptionMessage = key => {
    return EXCEPTION_MESSAGES[key];
};
