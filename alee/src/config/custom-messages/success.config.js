const  SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: "Login Success ! Redirecting..."
}
export const getSuccessMessage = key => {
    return SUCCESS_MESSAGES[key];
};
