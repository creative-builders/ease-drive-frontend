

import { axiosInstancePrivate } from "../general/api";



export const resetPassword = async(credentials) => {
    const response = await axiosInstancePrivate.put(`/reset-password`, credentials);
    return response.data;
}