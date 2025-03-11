import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import TabSelector from "../../../components/TabSelector/TabSelector";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginAuth } from "../../../store/auth/passenger/api";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import toast from "react-hot-toast";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
    const navigate =  useNavigate();
    const [activeTab, setActiveTab] = useState("Email Address");
    const tabs = ["Email Address", "Phone Number"];
    const [togglePassword, setTogglePassword] = useState(false);
    // const [emailOrPhone, setEmailOrPhone] = useState(""); 
    // const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [inputs, setInputs] = useState({
     email:"",
     password:""
    })

    const handleClick  = (tabName) => {
        setActiveTab(tabName);
        // setEmailOrPhone("");
    };
    
    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setInputs(prev => ({...prev,[e.target.name]:e.target.value}));
    }

    // useEffect(() => {
    //     const isEmailValid = activeTab === "Email Address" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone) : true;
    //     const isPhoneValid = activeTab === "Phone Number" ? /^[0-9]{10,}$/.test(emailOrPhone) : true;
    //     const isPasswordValid = password.length >= 6;
    //     setIsFormValid(emailOrPhone && password && (isEmailValid || isPhoneValid) && isPasswordValid);
    // }, [emailOrPhone, password, activeTab]);

    const { mutate:submitLogin, isLoading } = useMutation(loginAuth, {
        onSuccess: (response) => {
        toast.success(response?.message);
        navigate("/dashboard");
        setInputs( prev => ({
        ...prev,
        email:"",
        password:""
        }))

        },
        onError : (error) => {
        toast.error(error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs)
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
                            // onChange={(e) => setEmailOrPhone(e.target.value)}
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
                            // onChange={(e) => setPassword(e.target.value)}
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
                        className={`bg-green-900 inline-block mb-8 w-full p-4 rounded-lg transition-all duration-300`
                    }
                        // disabled={!isFormValid}
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
                    <div className="inline-block mb-16 w-full p-4 ">
                    <GoogleAuth/>
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
