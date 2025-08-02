import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Camera from '../../assets/icons/Camera';;
import EmailTwo from '../../assets/icons/EmailTwo';
import CallTwo from '../../assets/icons/CallTwo';
import EyeIcon from '../../assets/icons/EyeIcon';
import LockIcon from '../../assets/icons/LockIcon';
import profile from '../../assets/images/profile-user.png'
import FormInput from "../../components/form/FormInput";
import CustomButton from "../../components/CustomButton";
import { UserIcon } from "../../assets/icons/UserIcon";


const EditProfileView = ({ onClose }) => {

  const [profileImage, setProfileImage] = useState(profile);
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
 

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-[683px] w-full md:w-[439px] flex flex-col gap-20">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>

        <div className="flex items-center space-x-4 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <Camera
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
          <FormInput
              label="full name"
              id="name"
              type='text'
              // value={plateNumber}
              // onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<UserIcon />}
          />

          <FormInput
              label="Email"
              id="email"
              type='email'
              // value={plateNumber}
              // onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<EmailTwo />}
          />

          <FormInput
              label="Phone number"
              id="number"
              type='number'
              // value={plateNumber}
              // onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="Enter document Id number"
              inputClassName = "indent-1 flex items-center justify-center"
              required
              leftIcon={<CallTwo className="text-gray-200" />}
          />

          <FormInput
            label="Password"
            id="password"
            type='password'
            // value={plateNumber}
            // onChange={(e) => setPlateNumber(e.target.value)}
            placeholder="Enter document Id number"
            inputClassName = "indent-1 flex items-center justify-center"
            required
            leftIcon={<LockIcon />}
            rightIcon={<EyeIcon />}
          />

          <p className="font-medium text-base leading-[100%] tracking-normal text-left mt-4 text-blue-600">forget password</p>
        </form>
      </figure>

      <CustomButton
        name="Save"
        className="px-4 py-4 w-full rounded-2xl gap-2 mt-6 bg-green-700"
        />

    </div>
  );
};
export default EditProfileView 