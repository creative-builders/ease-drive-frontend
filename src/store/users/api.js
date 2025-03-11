import { axiosInstancePrivate } from "../auth/passenger/api";




// USER DASHBOARD APIS
export const getUserProfile = async({ queryKey }) => {
    const [_key, user_id]  =  queryKey;
    const response = await axiosInstancePrivate.get(`/v1/users/${user_id}`);
    return response.data;
}