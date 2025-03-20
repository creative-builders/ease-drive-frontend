import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosInstancePrivate = axios.create({
    baseURL: baseUrl,
    withCredentials: true
  });



//AUTH APIS
export const loginAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post('/auth/login', credentials);
    return response.data;
    
}


export const activateUser = async({ queryKey }) => {
    const [_key, params]  =  queryKey;
    const response = await axiosInstancePrivate.get(`/auth/activate`, {
        params
    });
    return response.data;
    
}




//Forgot Pssword APIs







// Log Out API
export const logOut = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/logout`, credentials);
    return response.data;
    
}