import {  useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { activateUser } from "../../store/auth/general/api";

const ActivateAccount = () => {
    const[searchParams] = useSearchParams();

    // GET the email and token from url
    // const email = searchParams.get("email");
    const token = searchParams.get("token");

    const { isLoading, isError,isSuccess, error } = useQuery(["activateUser", {token}],activateUser);

    // console.log(error)

  return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {isLoading ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-green-300 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-700 font-semibold animate-pulse">Activating your account...</p>
        </div>
      ) : isSuccess ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-600 animate-fade-in">🎉 Activation Successful!</h1>
          <p className="text-gray-600 mt-2 mb-4">You can now log in to your account.</p>
          <Link className='text-gray-400 font-medium' to="/login">Proceed to Login</Link>
        </div>
      ) : isError ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 animate-fade-in">❌ Activation Failed</h1>
          <p className="text-gray-600 mt-2 mb-4">{error?.status === 404 ? error?.response?.data?.message : error?.message}</p>
          <Link className='text-gray-400 font-medium' to="/login">Go back</Link>
        </div>
      ) : 

      null

      }
    </div>
  );
};

export default ActivateAccount;
