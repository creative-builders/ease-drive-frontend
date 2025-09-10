import React, { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
// import { CameraIcon } from "../assets/icons/CameraIcon";
// import CustomButton from "../components/CustomButton";
import fallbackProfile from "../../../assets/images/driver-picture.png";
import { CarIcon } from "../../../assets/icons/CarIcon";
import { PlateNumberIcon } from "../../../assets/icons/PlateNumberIcon";
import { HouseBuilding } from "../../../assets/icons/HouseBuilding";
import { SeatIcon } from "../../../assets/icons/SeatIcon";
import { ColorIcon } from "../../../assets/icons/ColorIcon";
import { Document } from "../../../assets/icons/Document";
import UploadIcon from "../../../assets/images/add.png";
// import { CustomSelectField } from "../components/customFormFields/CustomSelectField";
// import { InputField } from "../components/customFormFields/InputField";
import { FaChevronDown } from "react-icons/fa";
import { LocationHomeIcon } from "../../../assets/icons/LocationHomeIcon";
// import { userAtom } from "../components/atoms/userAtom";
import { useRecoilValue } from "recoil";
import { CameraIcon } from "../../../assets/icons/CameraIcon";
// import CustomButton from "../../../components/new-landingPage/reusables/CustomButton";
import CustomButton from "../../../components/CustomButton"
import { InputField } from "../../../components/customFormFields/InputField";
import { CustomSelectField } from "../../../components/customFormFields/CustomSelectField";
import { userAtom } from "../../../components/atoms/userAtom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { driverKYCUpdate } from "../../../store/auth/driver/api"
import { FormProvider, useStepFlowContext } from "../../../hooks/useStepFlowFormContext";


const UpdateDriverKYC = ({ onClose }) => {
  const profileImageRef = useRef(null);
  const documentUploadRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedCity, setSelectedCity] = useState();


  const {
    formData,
    setFormData,
    handleUpdateFormData,
  } = useStepFlowContext();



  const { mutate: submitDriverKYCUpdate, isLoading } = useMutation(driverKYCUpdate, {
    onSuccess: (response) => {
      toast.success(response?.message);
      setFormData(prev => ({
        ...prev,
        vehicleType: "",
        plateNumber: "",
        serviceArea: "",
        numberOfSeats: "",
        vehicleColor: "",
        documentID: "",
        vehiclePhotos: []
      }))
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    }
  })

  const isAnyFieldTouched = Object.values(formData).some((touched) => touched);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userData?.id;
    const newErrors = {};

    console.log(formData)
    if (selectedFiles.length === 0) {
      newErrors.files = "Please upload at least one document image";
    }
    const _formData = new FormData();

    _formData.append("vehicleType", formData.vehicleType);
    _formData.append("plateNumber", formData.plateNumber?.toString() ?? "");
    _formData.append("vehicleColor", formData.vehicleColor);
    _formData.append("serviceArea", formData.serviceArea);
    _formData.append("numberOfSeats", formData.numberOfSeats);
    _formData.append("documentID", formData.documentID);

    formData.vehiclePhotos.forEach((file) => {
      _formData.append("vehiclePhotos", file);
    });

    submitDriverKYCUpdate({ credentials: _formData, token: userId });
  }

  const userData = useRecoilValue(userAtom);
  const [profileImage, setProfileImage] = useState(
    userData?.profileImage || fallbackProfile
  );

  const handleProfileImageClick = () => {
    if (profileImageRef.current) {
      profileImageRef.current.click();
    }
  };


  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      console.log(imageUrl)
    }
  };

  const handleDocumentsChange = (e) => {
    const files = Array.from(e.target.files).filter(
      (file) => file.type === "image/jpeg" || file.type === "image/png"
    );

    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    setSelectedFiles(files);
    handleUpdateFormData("vehiclePhotos", files);
  };

  // const handleDocumentsChange = (e) => {
  //   const files = Array.from(e.target.files).filter(
  //     (file) => file.type === "image/jpeg" || file.type === "image/png"
  //   );
  //   setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  // };



  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[439px] flex flex-col gap-20">
      <figure className="">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={onClose}>
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-semibold">Vehicle Information</h2>
        </div>
        <button className="p-2 flex sm:hidden align-center text-[#4847EB] text-base leading-normal not-italic tracking-normal absolute top-3 right-2">
          Save
        </button>
        <div className="flex sm:hidden items-center space-x-4 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <CameraIcon
            className="w-4 h-4 absolute left-7 cursor-pointer bottom-3"
            onClick={handleProfileImageClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={profileImageRef}
            className="hidden"
            onChange={handleProfileImageChange}
          />
        </div>

        <form className="gap-4 mt-4"

          onSubmit={handleSubmit}>

          <CustomSelectField
            label="Vehicle type"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleUpdateFormData}
            type="text"
            placeholder="Enter Vehicle Plate  Number"
            options={["Keke", "Car", "Shuttle Bus", "Motorcycle", "Regular Bus", "Truck"]}
            rightIcon={FaChevronDown}

            leftIcon={CarIcon}
          // error={
          //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
          // }
          />

          <InputField
            label="Plate Number"
            name="plateNumber"
            placeholder="Enter Vehicle Plate  Number"
            value={formData.plateNumber}
            onChange={handleUpdateFormData}
            leftIcon={PlateNumberIcon}
          // error={
          //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
          // }
          />

          <CustomSelectField
            label="Service Area (Location)"
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleUpdateFormData}
            // value={selectedCity}
            defaultHolder="Choose service location"
            options={["Odenigwe", "Hill-Top", "Main gate", "Behind Flat", "Odeim gate",]}
            rightIcon={FaChevronDown}
          >
            <LocationHomeIcon className="lg:w-8 lg:h-8 w-6 h-6 text-gray-500" />
          </CustomSelectField>


          <div className="flex space-x-2 items-center justify-between mt-3">

            <InputField
              label="vehicle Color"
              name="vehicleColor"
              type="text"

              value={formData.vehicleColor}
              onChange={handleUpdateFormData}
              placeholder="Eg.black"
              leftIcon={ColorIcon}
            // error={
            //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
            // }
            />

            <InputField
              label="Number of seat"
              name="numberOfSeats"
              value={formData.numberOfSeats}
              onChange={handleUpdateFormData}

              type="text"
              placeholder="Eg.4"
              leftIcon={SeatIcon}
            // error={
            //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
            // }
            />
          </div>

          <InputField
            label="Document ID"
            name="documentID"
            type="text"
            value={formData.documentID}
            onChange={handleUpdateFormData}
            placeholder="Driver's licence"
            leftIcon={Document}
          // error={
          //   showplateNumbererror ? " Plate Number must be at least 9 characters" : ""
          // }
          />

          <div className="">
            <label className="text-base not-italic leading-[150%] font-medium text-gray-700 mb-1">
              Upload Vehicle photos (front, back and size)
            </label>
            <p className="block mb-2 text-sm lg:text-sm">
              You can upload up to 4 images (JPG, PNG). Maximum file size: 2MB
              per image
            </p>

            <input
              type="file"
              multiple
              name="vehiclePhotos"
              accept="image/*"
              ref={documentUploadRef}
              onChange={handleDocumentsChange}
              className="hidden"
            />
            <div
              onClick={() => documentUploadRef.current.click()}
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              {previewImages.length === 0 ? (
                <>
                  <img src={UploadIcon} className="h-14 w-14" alt="Upload Icon" />
                  <p className="text-xs mt-2 text-gray-400 flex p-3 gap-3 rounded-lg bg-[#DEFAE2]"> upload picture</p>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {previewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`preview-${index}`}
                      className="w-full h-full object-cover rounded-md border-2"
                    />
                  ))}

                </div>
              )}
              {errors.files && (
                <p className="text-red-500 text-sm mt-1">{errors.files}</p>
              )}
            </div>
          </div>


          <CustomButton
            name="Save"
            extendedStyles={"px-4 py-4 w-full rounded-2xl text-white gap-2 mt-6 bg-green-700"}
            isLoading={isLoading}
            disabled={!isAnyFieldTouched}
          // btnClick={(e) =>handleSubmit(e)}
          />
        </form>
      </figure>

      {/* <CustomButton
        name="Save"
        className="hidden sm:flex px-4 py-4 w-full
        rounded-2xl text-white gap-2 mt-0 bg-green-700"
        isLoading={isLoading}
        disabled={!isAnyFieldTouched}
      /> */}



    </div>
  );
};


const DriverKycDocuments = ({ onClose }) => {

  const initialInputFields = [
    "vehicleType",
    "plateNumber",
    "serviceArea",
    "numberOfSeats",
    "vehicleColor",
    "documentID",
    "vehiclePhotos"
  ]

  return (
    <FormProvider initialInputFields={initialInputFields}>
      <UpdateDriverKYC onClose={onClose} />
    </FormProvider>
  );
};
export default DriverKycDocuments

