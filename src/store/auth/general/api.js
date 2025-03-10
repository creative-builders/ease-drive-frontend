import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosInstancePrivate = axios.create({
    baseURL: baseUrl,
    withCredentials: true
  });




export const activateUser = async({ queryKey }) => {
    const [_key, params]  =  queryKey;
    const response = await axiosInstancePrivate.get(`/auth/activate`, {
        params
    });
    return response.data;
    
}