import { axiosInstancePrivate } from "../general/api";



//AUTH APIS
export const loginAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post('/auth/login', credentials);
    return response.data;
    
}

export const signUpAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/signup`, credentials);
    return response.data;
    
}



//Forgot Pssword APIs
export const sendResetPasswordOTP = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/send-otp`, credentials);
    return response.data;
    
}
export const verifyResetPssowordOTP = async(credentials) => {
    const response = await axiosInstancePrivate.put(`/verify-otp`, credentials);
    return response.data;
    
}
export const resetPassword = async(credentials) => {
    const response = await axiosInstancePrivate.put(`/reset-password`, credentials);
    return response.data;
}



// Log Out API
export const logOut = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/logout`, credentials);
    return response.data;
    
}