import { axiosInstancePrivate } from "../auth/general/api";




// USER DASHBOARD APIS
export const getUserProfile = async({ queryKey }) => {
    const [_key, userId]  =  queryKey;
    const response = await axiosInstancePrivate.get(`/v1/users/${userId}`);
    return response.data;
}




export const updateUserProfile = async({ userId, payload }) => {

   const formData = new FormData();

   // Loop through payload and only append non-empty values
    Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
    });

   const response = await axiosInstancePrivate.patch(`v1/users/${userId}`,
        formData,
        
    );

    return response.data;
}