import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { axiosInstancePrivate } from "../../../store/auth/general/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const clientId = import.meta.env.VITE_GOOLE_CLIENT_ID;
// const clientId = "YOUR_GOOGLE_CLIENT_ID";

const GoogleAuth = ({
  role = "passenger"
}) => {
    const navigate = useNavigate()
  const handleSuccess = async (response) => {
    try {
      const { credential } = response;

      console.log(credential)
      
      // Send token to backend for verification
      const res = await axiosInstancePrivate.post("/auth/google", { token: credential, role });

      // Store JWT Token & User Data in Local Storage
      localStorage.setItem("token", res.data.token);
      console.log("User authenticated:", res.data);
      navigate("/dashboard");

    } catch (error) {
      toast.error("Google Sign-In Error:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
