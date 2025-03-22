import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { axiosInstancePrivate } from "../store/auth/general/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
import { FcGoogle } from "react-icons/fc";


const clientId = import.meta.env.VITE_GOOLE_CLIENT_ID;
// const clientId = "YOUR_GOOGLE_CLIENT_ID";

const GoogleAuthV2 = () => {
  const navigate = useNavigate();
  const[user, setUser] = useState([])
  const[profile,setProfile] = useState([]);
  const[loading, setLoading] =  useState(false)

  //login function 
  const login = useGoogleLogin({
    onSuccess : (codeResponse ) => setUser(codeResponse),
    onError : (error) => console.log(`Login Failed ${error}`)
  })

 
  useEffect(() => {
   const fetchUserDetails = async() => {
    const config = {
        headers:{
           Authorization:`Bearer ${user.access_token}`,
           Accept:"application/json"
        }
       }
      try{
        setLoading(true)
        if(user){
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
                config
            );
            const data = await response.data;
            setProfile(data)
           }
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
   }

   fetchUserDetails();

  },[user])

  console.log(profile)

  return (
   <>
   {
    loading ? (
    <CustomButton extendedStyles={"w-full"} isLoading={loading}/>
    )
    :
    (
    <button 
     onClick={(e) => {
     e.preventDefault();
     login();
      }}
     className="inline-block mb-16 w-full p-4 bg-gray-300 rounded-lg">
      <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
      <FcGoogle size={20} />
      Continue with Google
     </span>
    </button> 
    )
   }
   </>
  );
};

export default GoogleAuthV2;
