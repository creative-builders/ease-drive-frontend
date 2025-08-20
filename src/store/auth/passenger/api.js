import { axiosInstancePrivate } from "../general/api";



export const passengerSignUpAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/auth/register/passenger`, credentials);
    return response.data;
    
}






