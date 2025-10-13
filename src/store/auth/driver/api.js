
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

export const driverKYCUpdate = async ({ credentials, userId, whois }) => {
  // Validation
  if (!credentials || typeof credentials !== "object") {
    throw new Error("Invalid credentials format");
  }

  if (!userId && !whois) {
    throw new Error("Either userId or whois token is required");
  }

  const _formData = new FormData();

  Object.entries(credentials).forEach(([key, value]) => {
    if (value == null || value === "") return;
    if (Array.isArray(value)) {
      value.forEach((item) => _formData.append(key, item));
    } else if (typeof value === "boolean" || typeof value === "number") {
      _formData.append(key, String(value));
    } else {
      _formData.append(key, value);
    }
  });

  try {
    // Build endpoint dynamically
    let endpoint = "v1/users/update/driverkyc";
    if (userId) {
      endpoint += `/${encodeURIComponent(userId)}`;
    } else if (whois) {
      endpoint += `?whois=${encodeURIComponent(whois)}`;
    }

    const response = await axiosInstancePrivate.patch(endpoint, _formData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("KYC Update Error:", errorMessage);
    throw new Error(errorMessage || "KYC update failed");
  }
};


export const getPendingBookings = async () => {
  try {
    const response = await axiosInstancePrivate.get(`/v1/bookings/ride`);
    // console.log("API Response:", response.data.data.allBookings);
    return response.data.data.allBookings;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}

export const bidForARid = async ({rideId, amount, message}) => {
  console.log(typeof(parseInt(amount)))
  try {
    const response = await axiosInstancePrivate.post(`/v1/biddings/bids/${rideId}`, {
      bidPrice:parseInt(amount),
       message: message || "I'm very availble, wait for me to pick you up"
      
    });
    console.log("API Response:", response.data);
    return response.data
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}



export const getDriverDetails = async ({ userID }) => {
  try {
    const response = await axiosInstancePrivate.get(`v1/users/${userID}`)
    return response.data
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}