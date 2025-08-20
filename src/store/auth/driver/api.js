
// export const driverSignUpAuth = async(credentials) => {
//     const response = await axiosInstancePrivate.post(`/auth/register/driver`, credentials);
//     return response.data;


    
// }


import { axiosInstancePrivate } from "../general/api";

export const driverSignUpAuth = async (credentials) => {
    console.log("API Function Called with:", credentials); // Debugging log
    try {
        const response = await axiosInstancePrivate.post(`/auth/register/driver`, credentials);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};
