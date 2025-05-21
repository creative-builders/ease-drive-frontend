import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { FcGoogle } from "react-icons/fc";
import { googleAuth } from "../store/auth/general/api";
import { userAtom } from "./atoms/userAtom";
import { useSetRecoilState } from "recoil";

const GoogleAuthV3 = ({ role = "passenger" }) => {
  const setUserAtom = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Google Login Function
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.error("Login Failed:", error),
  });

  useEffect(() => {
    const registerWithGoogle = async () => {
      if (!user) return; // Prevent API call if user is null

      try {
        setLoading(true);
        const { access_token } = user;
        const data = await googleAuth({ role, access_token });

        localStorage.setItem("current_user",JSON.stringify(data.data));
        setUserAtom(data.data)
        
        //navigate to the dashboard
        
      } catch (error) {
        console.error("Google Authentication Error:", error);
      } finally {
        setLoading(false);
        navigate("/dashboard");
      }
    };

    registerWithGoogle();
  }, [user, role, navigate]); // Runs only when `user` or `role` changes

  return (
    <>
      {loading ? (
        <CustomButton extendedStyles="inline-block mb-8 w-full p-4 rounded-lg" isLoading={loading} />
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
          className="inline-block mb-16 w-full p-4 bg-gray-300 rounded-lg"
        >
          <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
            <FcGoogle size={20} />
            Continue with Google
          </span>
        </button>
      )}
    </>
  );
};

export default GoogleAuthV3;
