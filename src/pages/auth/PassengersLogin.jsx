import { useState } from "react"
import TabSelector from "../../components/TabSelector/TabSelector"
import { FcGoogle } from "react-icons/fc";
import googleIcon from "../../assets/icons/google-icon.svg"
import { Link } from "react-router-dom";


const PassengersLogin = () => {
    const [activeTab,setActiveTab] = useState("Email Address");
    const tabs = ["Email Address", "Phone Number"]

    const handleClick  = (tabName) => {
        setActiveTab(tabName)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
  return (
    <div className='min-h-screen bg-gray-500'>
        <div className='w-11/12 mx-auto xl:w-8/12 px-2 py-4'>
            <h2 className="font-bold text-base text-center text-gray-950 mb-[51px]">EaseDrive</h2>
            <h3 className="mb-4 text-xl text-gray-950 font-bold">Welcome back</h3>
            <p className="text-gray-900 mb-16">Log into your EaseDrive account.</p>

            {/* Tab Selector Section */}
            <TabSelector 
            extendedStyles={"mb-[34px]"}
            tabs={tabs}
            handleClick={handleClick}
            activeTab={activeTab}
            />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-gray-400 mb-2 block" htmlFor={`${activeTab === "Email Address" ? "email" :"phoneNumber"}`}>
                     {`${activeTab === "Email Address" ? "Email Address" : "Phone Number"}`} 
                    </label>
                    <input 
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type={`${activeTab === "Email Address" ? "email" : "number"}`} 
                    name={`${activeTab === "Email Address" ? "email" : "phoneNumber"}`} 
                    id={`${activeTab === "Email Address" ? "email" : "phoneNumber"}`} 
                     />
                </div>
                <div className="mb-[45px]">
                    <label className="text-gray-400 mb-2 block" htmlFor="password">Password</label>
                    <input 
                    className="p-4 rounded-lg w-full bg-gray-300"
                    type="password"
                    name="password"
                    id="password"
                     />
                </div>

                {/* Login Button */}
                <button 
                 className="inline-block mb-8 w-full p-4 bg-green-200 rounded-lg">
                    <span className="text-bold text-base text-white">Login to EaseDrive</span>
                </button>

                {/* Or use Google auth */}
                <div className="flex mb-8 items-center gap-2 before:flex-1 before:border-gray-950 before:border-t after:flex-1 after:border-gray-950 after:border-t"> OR</div>

                {/* Google Login button*/}
                <button 
                 className="inline-block mb-16 w-full p-4 bg-gray-300 rounded-lg">
                    <span className="text-bold text-base text-gray-950 flex justify-center items-center gap-x-2">
                    <FcGoogle size={20} />
                    Continue with Google
                    </span>
                </button>

                <div className="flex justify-center gap-x-2">
                    <p>Don't have an account ?</p>
                    <Link to="/passenger-signup" className="text-green-300">Sign Up</Link>
                </div>

            </form>
        </div>
    </div>
  )
}

export default PassengersLogin