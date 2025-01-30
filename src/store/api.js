
import axios from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosInstancePrivate = axios.create({
    baseURL: baseUrl,
    withCredentials: true
  });

  


export const passengerLogin = async(credentials) => {
const response = await axiosInstancePrivate.post('/login', credentials);
return response.data;
//Todo 
//Getting the APIs reeady
}