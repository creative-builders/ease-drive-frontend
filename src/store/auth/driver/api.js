
// export const driverSignUpAuth = async(credentials) => {
//     const response = await axiosInstancePrivate.post(`/auth/register/driver`, credentials);
//     return response.data;


    
// }


import { axiosInstancePrivate } from "../general/api";

export const driverSignUpAuth = async (credentials) => {
    // console.log("API Function Called with:", credentials); // Debugging log
    try {
        const response = await axiosInstancePrivate.post(`/auth/register/driver`, credentials);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};



// export const driverKYCUpdate = async ({ credentials, token }) => {
//     console.log("API Function Called with:", credentials);
//     try {
//         const response = await axiosInstancePrivate.patch(
//             `v1/users/update/driverkyc?whois=${token}`,
//             credentials,
            
//         );
//         console.log("API Response:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("API Error:", error.response?.data || error.message);
//         throw error;
//     }
// };


export const driverKYCUpdate = async ({ credentials, token }) => {
  // Validation
  if (!credentials || typeof credentials !== 'object') {
    throw new Error('Invalid credentials format');
  }
  
  if (!token) {
    throw new Error('Token is required');
  }

  const _formData = new FormData();

  Object.entries(credentials).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') return;

 
    if (value instanceof File) {
      _formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach(item => {
        if (item instanceof File) {
          _formData.append(key, item);
        }
      });
    } else if (typeof value === 'boolean') {
      _formData.append(key, value.toString());
    } else if (typeof value === 'number') {
      _formData.append(key, value.toString());
    } else {
      _formData.append(key, value);
    }
  });

  try {
    const response = await axiosInstancePrivate.patch(
      `v1/users/update/driverkyc?whois=${encodeURIComponent(token)}`,
      _formData,
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("KYC Update Error:", errorMessage);
    throw new Error(errorMessage || 'KYC update failed');
  }
};

export const getDriverDetails = async ({userID}) => {  
    try {
        const response = await axiosInstancePrivate.get(`v1/users/${userID}`)
        return response.data
    } catch (error) {   
         console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
}