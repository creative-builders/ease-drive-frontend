import { axiosInstancePrivate } from "../general/api";


export const sendResetPasswordOTP = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/auth/send-otp`, credentials);
    return response.data;
    
}