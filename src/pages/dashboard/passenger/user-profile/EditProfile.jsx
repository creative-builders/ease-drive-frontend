import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import fallbackProfile from "../../../../assets/images/profile-user.png";
import { UserIcon } from "../../../../assets/icons/UserIcon";
import { CameraIcon } from "../../../../assets/icons/CameraIcon";
import { EyeOpenIcon } from "../../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../../assets/icons/EyeCloseIcon";
import { EmailSignedIcon } from "../../../../assets/icons/EmailSignedIcon";
import { PhoneIcon } from "../../../../assets/icons/PhoneIcon";
import { LockPasswordIcon } from "../../../../assets/icons/LockPasswordIcon";
import { useRecoilValue } from "recoil";
import { InputField } from "../../../../components/customFormFields/InputField";
import { userAtom } from "../../../../components/atoms/userAtom";
import { Modal } from "../../../../components/Modal";
import { FormProvider, useStepFlowContext } from "../../../../hooks/useStepFlowFormContext";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../../../store/users/api";
import CustomButton from "../../../../components/CustomButton";





const UpdatePassengerProfile = ({ onClose }) => {

const {
    formData,
    inputTouched,
    setFormData,
    handleUpdateFormData,
} = useStepFlowContext();

const userData = useRecoilValue(userAtom);

  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(
    userData?.profileImage || fallbackProfile
  );
  const fileInputRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false); // start closed
  const [email, setEmail] = useState("");
  const [file,setFile] = useState(null);


  const { mutate:submitProfileUpdate , isLoading } = useMutation(updateUserProfile, {
     onSuccess: () => {

     },
     onError:(error) => {
      toast.error(error.response?.data?.message || error.message);
     }
  })

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      console.log(imageUrl);
    }
  };

  const handleSendLink = () => {
    console.log("Sending link to:", email);
    // call API here
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userData?.id;
    submitProfileUpdate({ userId , payload: {...formData, profileImage: file }} );
  }



  return(
   <div className="bg-white rounded-2xl p-6 shadow-md h-fit md:h-[783px] w-full md:w-[439px] flex flex-col gap-20">
      <figure>
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>

        {/* Profile Image */}
        <div className="flex items-center space-x-4 relative">
          <img
            src={profileImage || userData?.profileImage || fallbackProfile}
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

        {/* Form */}
        <form 
        className="gap-4 mt-4" 
         onSubmit={ handleSubmit}
         >

          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            placeholder={userData?.fullName || "Enter your name"}
            leftIcon={UserIcon}
            onChange={handleUpdateFormData}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder={userData?.email}
            leftIcon={EmailSignedIcon}
            readOnly={true}
          />

          <InputField
            label="Phone Number"
            name="phoneNumber"
            type="number"
            placeholder={userData?.phoneNumber || "Enter your number"}
            leftIcon={PhoneIcon}
            onChange={handleUpdateFormData}
          />

          <InputField
            label="Enter Password"
            name="password"
            placeholder="Enter your password"
            leftIcon={LockPasswordIcon}
            toggleable
            showPassword={showPassword}
            handleTogglePassword={handleTogglePassword}
            rightIconOpen={EyeOpenIcon}
            rightIconClose={EyeCloseIcon}
            isPassword
            onChange={handleUpdateFormData}
          />

          {/* Forgot Password Trigger */}
          <p
            onClick={() => setIsOpen(true)} // ✅ Correct setter
            className="font-medium text-base leading-[100%] tracking-normal text-left mt-4 text-blue-600 cursor-pointer"
          >
            Forgot password
          </p>

         <CustomButton
          name="Save"
          extendedStyles= {"px-4 py-4 w-full rounded-2xl text-white gap-2 mt-6 bg-green-700"}
          isLoading = { isLoading }
          />
        </form>
      </figure>

     

      {/* Forgot Password Modal */}
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
              // error={
              //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
              // }
            />

            <CustomButton
              name="Send Link"
              onClick={handleSendLink}
              extendedStyles= { "w-full h-[48px] mt-6 bg-green-700 text-white rounded-xl font-semibold" }
            />
          </div>
        </Modal>
      )}
    </div>
  )
}


export const EditProfileView = ({ onClose }) => {
  
 const initialInputFields = ["fullName", "phoneNumber", "profileImage", "password"]

  return (
    <FormProvider initialInputFields={initialInputFields}>
      <UpdatePassengerProfile/>
    </FormProvider>
  );
};
