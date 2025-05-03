import { useState, useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import TabSelector from "../../../components/TabSelector/TabSelector";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import toast from "react-hot-toast";
import GoogleAuth from "../../../components/GoogleAuth";
import { loginAuth } from "../../../store/auth/general/api";
import GoogleAuthV2 from "../../../components/GoogleAuthV2";
import GoogleAuthV3 from "../../../components/GoogleAuthV3";
import { userAtom } from "../../../components/atoms/userAtom";
import { useRecoilValue } from "recoil";

const Login = () => {
    const navigate =  useNavigate();
    const setUserData = useRecoilValue(userAtom)
    const [activeTab, setActiveTab] = useState("Email Address");
    const tabs = ["Email Address", "Phone Number"];
    const [togglePassword, setTogglePassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [inputs, setInputs] = useState({
     email:"",
     password:""
    })

    const handleClick  = (tabName) => {
        setActiveTab(tabName);
    };
    
    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setInputs(prev => ({...prev,[e.target.name]:e.target.value}));
    }

    useEffect(() => {
        const isEmailValid = activeTab === "Email Address" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email) : true;
        const isPhoneValid = activeTab === "Phone Number" ? /^[0-9]{10,}$/.test(inputs.email) : true;
        const isPasswordValid = inputs.password.length >= 6;
        setIsFormValid(inputs.email && inputs.password && (isEmailValid || isPhoneValid) && isPasswordValid);
    }, [inputs.email, inputs.password, activeTab]);

    const { mutate:submitLogin, isLoading } = useMutation(loginAuth, {
        onSuccess: (response) => {
        toast.success(response?.message);
        console.log(response.data)
        localStorage.setItem("current_user",JSON.stringify(response.data));
        navigate("/dashboard");
        setInputs( prev => ({
        ...prev,
        email:"",
        password:""
        }))

        },
        onError : (error) => {
        toast.error(error.response.data.message || error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(inputs)

    };

    return (
        <div className='min-h-screen bg-gray-500'>
            <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
                <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">
                    <Link to="/">EaseDrive</Link>
                </h2>
                <h3 className="mb-4 text-xl text-gray-950 font-bold">Welcome back</h3>
                <p className="text-gray-600 mb-16">Log into your EaseDrive account.</p>

                {/* Tab Selector Section */}
                <TabSelector
                    extendedStyles={"mb-[34px]"}
                    tabs={tabs}
                    handleClick={handleClick}
                    activeTab={activeTab}
                />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-gray-400 mb-2 block" htmlFor={activeTab === "Email Address" ? "email" :"phoneNumber"}>
                            {activeTab === "Email Address" ? "Email Address" : "Phone Number"} 
                        </label>
                        <input 
                            className="p-4 rounded-lg w-full bg-gray-300"
                            type={activeTab === "Email Address" ? "email" : "tel"} 
                            name={"email"} 
                            id={"email"} 
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-[45px] relative">
                        <label className="text-gray-400 mb-2 block" htmlFor="password">Password</label>
                        <input 
                            className="p-4 rounded-lg w-full bg-gray-300"
                            type={togglePassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                        <p className="absolute text-sm right-4 top-4/5 mt-2 text-green-400 cursor-pointer">
                            <Link to={"/Forgot-password"}>Forgot Password</Link>
                        </p>

                        <span 
                            onClick={handleTogglePassword}
                            className="inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2">
                            {togglePassword ? <FiEyeOff fontSize={"18"}/> : <FiEye fontSize={"18"}/>} 
                        </span>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                       className={`inline-block mb-8 w-full p-4 rounded-lg transition-all duration-300 
                        ${ isFormValid ? "bg-green-300 hover:bg-green-700" : "bg-green-200 cursor-not-allowed"}`
                        }
                        disabled={!isFormValid}
                    >
                        <span className="text-bold text-base text-white flex items-center justify-center">
                       { isLoading ? <LoadingSpinner className="animate-spin"/> : "Login to EaseDrive"}
                        </span>
                    </button>

                    {/* Or use Google auth */}
                    <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div>

                    {/* Google Login button */}
                    {/* <button 
                        className="inline-block mb-16 w-full p-4 bg-gray-300 rounded-lg">
                        <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
                            <FcGoogle size={20} />
                            Continue with Google
                        </span>
                    </button> */}

                     {/* Google Login Component */}
                    <div className="flex justify-center mb-16 p-4 ">
                    {/* <GoogleAuth/> */}
                    <GoogleAuthV3/>
                    </div>

                    <div className="flex justify-center gap-x-2">
                        <p>Don &apos; t have an account?</p>
                        <Link to="/signup-as" className="text-green-300">Sign Up </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
