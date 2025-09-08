import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { FcGoogle } from "react-icons/fc";
import { googleAuth } from "../store/auth/general/api";
import { userAtom } from "./atoms/userAtom";
import { useSetRecoilState } from "recoil";

const  GoogleAuthV3 = ({ role = "passenger" }) => {
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
      let data;

      try {
        setLoading(true);
        const { access_token } = user;
        data = await googleAuth({ role, access_token });

        localStorage.setItem("current_user",JSON.stringify(data.data));
        setUserAtom(data.data);
        
      } catch (error) {
        console.error("Google Authentication Error:", error);
      } finally {
        setLoading(false);
        setUserAtom(data.data)
        navigate("/dashboard");
      }
    };

    registerWithGoogle();
  }, [user, role, navigate]); // Runs only when `user` or `role` changes

  return (
    <>
      {loading ? (
        <CustomButton extendedStyles="inline-block w-full p-4 h-[50px] lg:h-[60px] rounded-lg bg-primary-700" isLoading={loading} />
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
          className="inline-block h-[50px] lg:h-[60px] border border-neutral-400 w-full p-4 bg-gray-300 rounded-lg"
        >
          <span className="font-bold text-xs lg:text-base text-gray-950 flex justify-center items-center gap-x-2">
            <FcGoogle size={20} />
            Continue with Google
          </span>
        </button>
      )}
    </>
  );
};

export default GoogleAuthV3;
