import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { UserIcon } from "../../../assets/icons/UserIcon";
import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import fallbackProfile from "../../../assets/images/driver-picture.png"
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { PhoneIcon } from "../../../assets/icons/PhoneIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { useRecoilValue } from "recoil";
import { CameraIcon } from "../../../assets/icons/CameraIcon";
import CustomButton from "../../../components/new-landingPage/reusables/CustomButton";
import { InputField } from "../../../components/customFormFields/InputField";
import { userAtom } from "../../../components/atoms/userAtom";
import { Modal } from "../../../components/Modal";


export const DriverProfileDetails = ({ onClose }) => {
  
const userData = useRecoilValue(userAtom);
   const [profileImage, setProfileImage] = useState(
      userData?.profileImage || fallbackProfile
    );

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
     console.log(imageUrl)
    }
  };
 
  const [isOpen, setIsOpen] = useState(false); // start closed
  const [email, setEmail] = useState("");

    const handleSendLink = () => {
    console.log("Sending link to:", email);
    // call API here
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[439px] flex flex-col gap-20">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>
         <button className="p-2 flex sm:hidden align-center text-accent-600 text-base leading-normal not-italic tracking-normal absolute top-3 right-2">Save</button>
        <div className="flex items-center space-x-4 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <CameraIcon
            className="w-4 h-4 absolute left-7 cursor-pointer bottom-3"
            onClick={handleIconClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <form className="gap-4 mt-4" action="">

          <InputField
            label="full name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            leftIcon={UserIcon}
          
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            leftIcon={EmailSignedIcon}
        
          />

          <InputField
            label="Phone number"
            id="number"
            type="number"
            placeholder="Enter your Number"
            leftIcon={PhoneIcon}
            
          />


          <InputField
            label="Enter Password"
            name="password"
            placeholder="Enter your password"
            leftIcon={LockPasswordIcon}
    
            rightIconOpen={EyeOpenIcon}
            rightIconClose={EyeCloseIcon}
            isPassword
  
            />
          <p
            onClick={() => setIsOpen(true)}
            className="font-medium text-base leading-[100%] tracking-normal text-left mt-4 text-blue-600 cursor-pointer"
          >
            Forgot password
          </p>
        </form>
      </figure>

      <CustomButton
        children="Save"
        className="hidden sm:flex px-4 py-4 w-full text-white rounded-2xl gap-2 mt-6 bg-green-700"
        />
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          title="Forgot Password"
          bodyText="Enter your email and we'll send you a verification code to reset your Password"
          modalIcon={<EmailSignedIcon />}
        >
          <div className="w-full mt-6">
            <label className="block text-left font-medium text-sm mb-2">
              Enter Email
            </label>
            
            <InputField
              // label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              leftIcon={EmailSignedIcon}
              onChange={(e) => setEmail(e.target.value)}
          
            />

            <CustomButton
              urlLink
              children="Send Link"
              btnClick={handleSendLink}
              className="w-full h-[48px] mt-6 bg-green-700 text-white rounded-xl font-semibold"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};