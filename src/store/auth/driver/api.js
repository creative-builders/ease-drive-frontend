
export const driverSignUpAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/auth/register/driver`, credentials);
    return response.data;
    
}