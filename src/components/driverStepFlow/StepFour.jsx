
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import carIcon from '../../assets/images/Car.svg';
import profilePlaceholder from '../../assets/icons/user-circle.svg';
import camera from '../../assets/icons/camera-02.svg';
import sideImage from '../../assets/images/sideImage.png';
import BackArrow from '../BackArrow';
import SectionLabel from '../SectionLabel';
import fly from '../../assets/images/you-are-set-img.png'
import cancel from '../../assets/icons/cancel.svg'


export default function StepFour({ prevStep, step, totalSteps}) {

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // popup modal area

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleContinue = () => navigate('/next-page');

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white font-[inter]">
      {/* Left Side */}
      <div className="w-full md:w-1/2 px-6 md:px-14 py-10 relative flex flex-col justify-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={carIcon} alt="Ease Drive" className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-2xl md:text-3xl font-bold italic font-[inter]">Ease Drive</h1>
        </div>

        {/* Step Label */}
        <div className="mb-4">
          <article className="text-xl md:text-2xl font-semibold font-[inter] relative mb-4">
            <span className='font-[inter] font-bold text-[18px] md:text-[26px] leading-[36px] tracking-normal align-middle'>Upload Profile Photo</span>
            <div className="text-center mb-[29px] absolute right-1 top-3">
              <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
          </article>
          <p className="font-[inter] font-medium text-[18px] leading-[140%] tracking-normal align-middle">Show face clearly, no filters or group photos</p>
        </div>

        <BackArrow
            extendedStyles="top-20 left-8 absolute"
            onClick={() => prevStep()}
        />

        {/* Upload Profile Section */}
        <div className="flex flex-col items-center mb-8">

            <input
                type="file"
                accept="image/jpeg,image/png"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            <div
                className="w-24 h-24 rounded-full border border-gray-300 cursor-pointer flex items-center justify-center relative overflow-hidden"
                onClick={handleClick}
            >
                <img
                src={preview || profilePlaceholder}
                alt="Profile Preview"
                className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-full p-1">
                <img src={camera} alt="Camera Icon" className="h-4 w-4" />
                </span>
            </div>

            {/* Upload text */}
            <button
                type="button"
                onClick={handleClick}
                className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
            >
                Upload Profile Photo
            </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={handleOpenModal}
            className="w-full py-3 bg-green-100 text-green-600 rounded-lg font-semibold"
          >
            Skip
          </button>
          <button 
           onClick={handleOpenModal}
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-6">
        <img
          src={sideImage}
          alt="Driver"
          className="rounded-2xl object-cover w-full max-w-[90%] h-auto"
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="h-72 flex text-center relative flex-col items-center justify-around gap-2 px-3 py-8 w-4/5 md:max-w-md bg-white rounded-[32px]">
            {/* Cancel Icon */}
            <img
              src={cancel}
              className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
              alt="Close"
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <div className="h-fit w-40 flex flex-col items-center justify-center">
              <img src={fly} className="h-16 w-16" alt="Fly icon" />
              <p className="font-[inter] font-semibold text-[14px] md:text-2xl leading-[100%] tracking-normal">
                You are all set
              </p>
            </div>

            <p className="font-[inter] font-medium text-[12px] md:text-base leading-[100%] tracking-normal text-center">
              Thanks for signing up! We’re reviewing your documents. You’ll be notified within 24 hours when you’re approved to start accepting rides.
            </p>

            {/* Continue Button */}
            <button
              className="w-full py-3 bg-green-700 hover:bg-green-800 text-white rounded-2xl font-semibold"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
