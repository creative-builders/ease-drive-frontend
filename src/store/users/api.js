
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


export const bookRide =  async(credentials) => {
 const response = await axiosInstancePrivate.post(`/v1/bookings/ride`, credentials);
 return response.data;
}


export const createRide = async (credentials) => {
  const formData = new FormData();

  for (const key in credentials) {
    const value = credentials[key];

    // Handle arrays (e.g., multiple files)
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(`${key}`, item);
      });
    } 
    // Handle nested objects (convert to JSON)
    else if (typeof value === "object" && value !== null) {
      formData.append(key, JSON.stringify(value));
    } 
    // Handle primitives (strings, numbers, etc.)
    else {
      formData.append(key, value);
    }
  }

  const response = await axiosInstancePrivate.post(`/v1/bookings/ride`, formData);

  return response.data;
};



export const getUserRides = async({ queryKey }) => {
    const [_key, passengerId]  =  queryKey;
    const response = await axiosInstancePrivate.get(`/v1/bookings/ride/passenger/${passengerId}`);
    return response.data;
}



export const fetchRideById = async (passengerId, rideId) => {
  try {
    const response = await axiosInstancePrivate.get(
      `/v1/bookings/ride/${passengerId}/${rideId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching ride:", error);
    throw error;
  }
};



export const initializePayment  = async( credentials ) => {
   const {amount, bidId} = credentials
    const response = await axiosInstancePrivate.post(`/v1/payment/paystack/${bidId}`, 
      {amount:amount}
    );
    return response.data;
}
