import { axiosInstancePrivate } from "../general/api";




export const verifyResetPssowordOTP = async(credentials) => {
    const response = await axiosInstancePrivate.put(`/verify-otp`, credentials);
    return response.data;
    
}