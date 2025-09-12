import React, { useState } from 'react'
import { InfoCard } from './InfoCard';
import { EarningsIcon } from "../../../assets/icons/dashboard/EarningsIcon"
import CustomButton from "../../CustomButton"
import { useNavigate } from 'react-router-dom';
import { CloseMenuIcon } from '../../../assets/icons/CloseMenuIcon'
import { InputField } from '../../customFormFields/InputField'
import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { ResetSuccess } from '../../../assets/icons/ResetSuccess'
import { DashboardModal } from './DashboardModal'
import LoadingSpinner from '../../LoadingSpinner';
import { driverKYCUpdate } from "../../../store/auth/driver/api"
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";

export const NoEarnings = () => {

  const user = useRecoilValue(userAtom);

  const [modalType, setModalType] = useState(null); // "image" | "amount" | "loading"
  const [showPassword, setShowPassword] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  const [isSumitting, setisSubmitting] = useState(false)
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({

    newPin: "",
    confirmNewPin: ""
  });


  const navigate = useNavigate()

  const showNewPinError = inputTouched && inputs.newPin.length !== 4
  const showPinNotMatchedError = inputTouched && inputs.newPin !== inputs.confirmNewPin

  const { mutate: submitDriverKYC, isLoading } = useMutation(
    driverKYCUpdate,
    {
      onSuccess: (data) => {
        // console.log("KYC data updated successfully:", data);
        setisSubmitting(false)
        setModalType("resetsuccess");
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  )


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setInputTouched(true);
  };



  const handlePinUpdate = () => {
    const _formData = new FormData();
    _formData.append("transactionPin", inputs.newPin);

    try {
      submitDriverKYC({ credentials: _formData, token: user?.id });
      // setModalType("withdralpin")
    } catch (error) {
      console.log(error)
    }
  }



  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="py-2.5 relative  h-full inline-flex flex-col justify-start items-start ">
      <div className="inline-flex justify-start items-start ">
        <div className="lg:w-[563px] w-[95%] m-auto font-poppins inline-flex flex-col lg:justify-start lg:items-start gap-4">
          <div className='flex lg:gap-2 gap-2'>
            <InfoCard title="Current Balance" InfoIcon={EarningsIcon} value={"0.00"} />
            <InfoCard title="Total Earnings" InfoIcon={EarningsIcon} value={"0.00"} />
          </div>

          <div className=" lg:h-[528px] lg:w-[1000px] h-[177px] px-5 py-2.5 bg-white rounded-lg
            flex flex-col justify-start  gap-10">

            <div>
              <h1 className="lg:text-2xl font-semibold font-poppins text-gray-800">Payout Details</h1>
            </div>

            <div className='flex justify-center items-center lg:flex-col flex-col lg:gap-20 gap-40'>
              <div className='lg:w-[70%] w-full '>
                <p className='text-neutral-400 text-center font-normal font-poppins lg:text-lg text-xs'>You haven’t completed any trips yet.
                  <br /> Once you accept and complete a ride, your earnings will appear here.</p>
              </div>

              <div className="flex lg:w-[355px] w-[346px] flex-col lg:mt-[0%] mt-[5%] justify-start items-center gap-2 lg:gap-10">
                <CustomButton name="Set Up Withdrawal Pin" btnClick={() => {
                  setModalType("withdralpin")
                }} extendedStyles="w-full  bg-green-700 p-3 lg:p-4 rounded-lg">
                </CustomButton >
                <CustomButton name="Accept a Ride" btnClick={() => navigate("/dashboard/requests")} extendedStyles="w-full  bg-green-50 
                text-green-700
                p-3 lg:p-4 rounded-lg">
                </CustomButton >
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Enter modal*/}
      {modalType === "withdralpin" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                                          top-[35%] lg:top-0 h-[600px] lg:w-[633px] lg:h-[500px]">
            {/* Close Button */}
            <button
              onClick={() => setModalType(null)}
              className="right-2 text-black py- flex justify-end items-end "
            >
              <CloseMenuIcon className="lg:w-10 lg:h-10 w-6 h-6" />
            </button>

            {/* Input Label */}
            <h4 className="text-black lg:text-[26px] text-sm text-left font-poppins font-semibold">
              Set Up Your Withdrawal PIN </h4>
            <div className='flex flex-col justify-center items-center' >

              <p className='lg:text-base text-sm font-regular '>For your security, you’ll need a 4-digit PIN to authorize all withdrawals.
                Please choose a PIN that’s easy to remember but hard to guess.</p>

            </div>



            {/* Input with ₦ symbol */}
            <div className="relative w-full">
              <div className=''>
                <div className='w-[100%]'>
                  <InputField
                    label="Enter New PIN"
                    name="newPin"
                    placeholder="Enter your new PIN"
                    value={inputs.newPin}
                    onChange={handleChange}
                    leftIcon={LockPasswordIcon}
                    error={showNewPinError ? "Pin must 4 be characters" : ""}
                    toggleable
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    rightIconOpen={EyeOpenIcon}
                    rightIconClose={EyeCloseIcon}
                    isPassword

                  />

                  <InputField
                    label="Confirm New PIN"
                    name="confirmNewPin"
                    placeholder="Confirm your PIN"
                    value={inputs.confirmNewPin}
                    onChange={handleChange}
                    leftIcon={LockPasswordIcon}
                    error={showPinNotMatchedError ? "PINs do not match. Please re-enter." : ""}
                    toggleable
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    rightIconOpen={EyeOpenIcon}
                    rightIconClose={EyeCloseIcon}
                    isPassword

                  />
                </div>

              </div>

            </div>

            <button
              type="submit"
              onClick={() => {
                setisSubmitting(!isSumitting)
                handlePinUpdate()
              }}

              className={`inline-block  mb-2 w-full px-1.5 lg:p-4 p-2 h-[45px] lg:h-[60px]
                                                         rounded-lg transition-all duration-300 bg-green-700 hover:bg-green-600 `}
            >
              <span className="text-white font-semibold flex items-center justify-center">
                {isSumitting ? (
                  <LoadingSpinner className="animate-spin" />
                ) : (
                  "Set PIN"
                )}
              </span>
            </button>

            {/* <CustomButton
              name="Confirm Withdrawal"
              disabled={!inputs.newPin.trim() || !inputs.confirmNewPin.trim()}
              btnClick={handlePinUpdate}
              extendedStyles={`font-medium lg:py-3 py-3 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
                                  ${inputs.newPin.trim() === inputs.confirmNewPin.trim()
                  ? "bg-green-700 hover:bg-green-700 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed opacity-20"
                }`}
            /> */}
          </div>
        </div>
      )}


      {/* RESET SUCCESS MODAL */}
      <DashboardModal
        isOpen={modalType === "resetsuccess"}
        onClose={() => setModalType(null)}
        icon={<ResetSuccess className="w-[50px] h-[90px] bg-green-50 flex items-center justify-center rounded-full" />}
        iconBg="bg-green-50"
        title="PIN Set Successfully!"
        message="You can now securely withdraw your earnings using your PIN."
        actionLabel="Return to Dashboard"
        onAction={() => {
          setModalType(null);
          navigate("/dashboard");
        }}
        actionStyles="bg-green-700 text-white"
      />
    </div>
  )
}
