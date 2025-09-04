import React, { useState } from 'react'
import { WalletIcon } from "../../../assets/icons/WalletIcon"
import CustomButton from "../../CustomButton"
import { EditIcon } from '../../../assets/icons/EditIcon'
import { CloseMenuIcon } from '../../../assets/icons/CloseMenuIcon'
import { InputField } from '../../customFormFields/InputField'
import { NairaIcon } from '../../../assets/icons/NairaIcon'
import { EyeOpenIcon } from "../../../assets/icons/EyeOpenIcon";
import { EyeCloseIcon } from "../../../assets/icons/EyeCloseIcon";
import { LockPasswordIcon } from "../../../assets/icons/LockPasswordIcon";
import { SuccessIcon } from "../../../assets/icons/SuccesIcon";
import { FailureIcon } from "../../../assets/icons/FailureIcon";
import { FaChevronDown } from "react-icons/fa";
import { PlateNumberIcon } from '../../../assets/icons/PlateNumberIcon'
import { CreditCardIcon } from '../../../assets/icons/CreditCardIcon';
import { BankHouseIcon } from '../../../assets/icons/BankHouseIcon';
import { ResetSuccess } from '../../../assets/icons/ResetSuccess'
import { useNavigate } from 'react-router-dom'

import { DashboardModal } from './DashboardModal'
import { CustomSelectField } from "../../customFormFields/CustomSelectField"


export const AccountCenter = () => {

    const [modalType, setModalType] = useState(null); // "image" | "amount" | "loading"
    // const [amount, setAmount] = useState("");
    const [pin, setPin] = useState("")
    const [isAmountEmpty, setIsAmountEmpty] = useState(false);
    const [isPinInvalid, setIsPinInvalid] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const [inputTouched, setInputTouched] = useState(false);
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        amount: "",
        pin: "",
        bankName: "",
        bankAccountNumber: "",
        bankAccountHolderName: "",
        newPin: "",
        confirmNewPin: ""
    });

    const navigate = useNavigate()

    const isaccountNumberValid = (inputs?.bankAccountNumber || "").length >= 10;
    const showaccountNumbererror =
        inputTouched && inputs?.bankAccountNumber.length > 0 && !isaccountNumberValid;

    const isaccountNameValid = (inputs?.bankAccountHolderName || "").length >= 3;
    const showaccountNameerror =
        inputTouched && inputs?.bankAccountHolderName.length > 0 && !isaccountNameValid;

    const isPinValid = inputs.pin.length >= 4 && inputs.pin == "1234";
    const showPasswordError = inputTouched && inputs.pin.length > 0 && !isPinValid;

    const showNewPinError = inputTouched && inputs.newPin.length !== 4

    const showPinNotMatchedError = inputTouched && inputs.newPin !== inputs.confirmNewPin

    const handleAmountSubmit = () => {
        if (!inputs.amount) {
            // setIsAmountEmpty(true);
            return;
        }
        // close amount modal, open loading modal
        setModalType("enterpin");
    };

    const handlePinSubmit = () => {
        setModalType("success")
        setTimeout(() => {
            setModalType("failed")
        }, 7000);

    }

    const handleUpdateBankAccount = () => {
        setModalType("bankdetails")
    }

    const handleBankDetailsSubmit = () => {
        setModalType("withdralpin")
    }
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setInputTouched(true);
    };
    const handlePinUpdate = () => {
        setModalType("resetsuccess")
    }

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="p-6 lg:w-[495px] lg:h-[263px] bg-white rounded-xl shadow w-full">
            <div className="flex flex-col justify-start items-start gap-4 h-full w-[]">
                <h2 className="text-lg font-semibold">Payout Details</h2>
                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-sm font-semibold text-gray-800'>Linked Account</p>
                    </div>
                    <div className='flex items-center lg:gap-10 justify-between lg:w-full w-[328px] bg-accent-50 p-4 rounded-lg '>
                        <div className="inline mr-2 bg-green-50 lg:w-[60px] lg:h-[60px]  w-[34px] h-[34px] rounded-full flex justify-center items-center">
                            <WalletIcon />
                        </div>
                        <div className=' flex flex-col justify-start items-start gap-2 '>
                            <div className='flex lg:text-base text-[14px] font-semibold text-gray-800 gap-4'>
                                Bank Name
                                <span className='lg:text-[12px] text-[10px] text-blue-500 bg-green-50 px-4 rounded-xl mt-'>Default</span>
                            </div>

                            <div className='flex gap-2'>
                                <p className='lg:text-[14px] text-[10px]'>Account Number : <span>023****3043</span> </p>

                            </div>
                        </div>
                        <EditIcon className="inline mr-2 cursor-pointer" onClick={handleUpdateBankAccount} />
                    </div>
                    <div className='w-full flex gap-4'>
                        <CustomButton name="Withdraw Now" btnClick={() => setModalType("amount")} extendedStyles="bg-green-700 text-green-white w-full
                 p-3 lg:p-3 rounded-lg">
                        </CustomButton >
                    </div>
                </div>


            </div>

            {/* Amount Modal */}
            {modalType === "amount" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                                    top-[35%] lg:top-0 h-[480px] lg:w-[633px] lg:h-[420px]">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalType(null)}
                            className="right-2 text-black py- flex justify-end items-end "
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-6 h-6" />
                        </button>

                        {/* Input Label */}
                        <div className="text-black lg:text-lg text-[14px] font-poppins font-semibold">
                            Amount to withdraw
                        </div>

                        {/* Input with ₦ symbol */}
                        <div className="relative w-full lg:gap-18 my-2">
                            <div className='lg:w-[70%]'>
                                <InputField
                                    type="number"
                                    name="amount"
                                    onChange={handleChange}
                                    placeholder="Enter amount"
                                    leftIcon={NairaIcon}

                                />
                                <p className='font-regular lg:text-[14px] font-poppins lg:-mt-2 -mt-2'>Min. #500.00</p>

                                {isAmountEmpty && (
                                    <p className="text-red-500 text-sm mt-1 font-poppins ">Please enter an amount.</p>
                                )}
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-semibold text-neutral-950 lg:text-[18px] text-[14px]'>Bank Details</h2>
                                <div className='flex justify-start items-center lg:gap-10 w-full bg-accent-50 p-4 rounded-lg'>

                                    <div className='w-[25%]'>
                                        <div className="inline mr-2 bg-green-50 lg:w-[60px]  lg:h-[60px] w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                            <WalletIcon />
                                        </div>
                                    </div>

                                    <div className=' flex flex-col justify-start items-start gap-2 w-[100%] '>
                                        <div className='flex lg:text-base text-[14px] font-semibold text-gray-800 gap-4'>
                                            Bank Name
                                            <span className='lg:text-[12px] text-[10px] text-blue-500 bg-green-50 px-4 rounded-xl mt-'>Default</span>
                                        </div>

                                        <div className='flex gap-2'>
                                            <p className='lg:text-[14px] text-[10px]'>Account Number : <span>023****3043</span> </p>

                                        </div>
                                    </div>
                                    <div className='w-[25%]'>
                                        <EditIcon className="inline mr-2" />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <CustomButton
                            name="Continue"
                            disabled={!inputs.amount.trim()}
                            btnClick={handleAmountSubmit}

                            extendedStyles={`font-medium lg:py-3 py-3 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
                            ${inputs.amount.trim()
                                    ? "bg-green-700 hover:bg-green-700 text-white"
                                    : "bg-gray-400 text-white cursor-not-allowed opacity-20"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* ENTER PIN MODAL  */}
            {/* Enter modal*/}
            {modalType === "enterpin" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                                    top-[35%] lg:top-0 h-[720px] lg:w-[633px] lg:h-[580px]">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalType(null)}
                            className="right-2 text-black py- flex justify-end items-end "
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-6 h-6" />
                        </button>

                        {/* Input Label */}
                        <div className='flex flex-col justify-center items-center' >
                            <h4 className="text-black lg:text-lg text-[14px] text-center font-poppins font-semibold">
                                Enter Pin to make withdrawal </h4>
                            <p className='lg:text-[18px] text-[14px] font-regular '> You are about to withdraw
                                <span className='text-blue-500 mx-2'> <br />
                                    ₦{inputs.amount}
                                </span> from your balance?</p>

                        </div>

                        <div className='lg:w-[100%] border-[2px] border-gray-50 lg:h-[182px] my-2 px-2 py-4 rounded-[10px] flex flex-col gap-2'>
                            <div className='w-full flex justify-between'>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>Amount</p>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular text-blue-500'>₦{inputs.amount}</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>Bank Name</p>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>Chase Bank</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>Account Number</p>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>12345678901</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>Processing Time</p>
                                <p className='lg:text-[18px] text-[12px] font-poppins font-regular'>24 - 48 hours</p>
                            </div>
                        </div>

                        {/* Input with ₦ symbol */}
                        <div className="relative w-full">
                            <div className=''>
                                {/* <InputField
                                    label="Enter PIN"
                                    type="text"
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="Enter pin"
                                    rightIconOpen={EyeOpenIcon}
                                    rightIconClose={EyeCloseIcon}
                                />

                                {isPinInvalid && (
                                    <p className="text-red-500 text-sm mt-1 font-poppins ">Invalid PIN</p>
                                )} */}


                                <div className='flex justify-end cursor-pointer lg:-mb-6 -mb-6 font-medium text-[12px] lg:text-[18px] text-green-600'>
                                    <button className='cursor-pointer'>
                                        Forgot PIN?
                                    </button>
                                </div>


                                <div className='w-[100%]'>
                                    <InputField
                                        label="Enter PIN"
                                        name="pin"
                                        placeholder="Enter your PIN"
                                        value={inputs.pin}
                                        onChange={handleChange}
                                        leftIcon={LockPasswordIcon}
                                        error={showPasswordError ? "Invalid PIN" : ""}
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

                        <CustomButton
                            name="Confirm Withdrawal"
                            disabled={!inputs.pin.trim()}
                            btnClick={handlePinSubmit}
                            extendedStyles={`font-medium lg:py-3 py-3 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
                            ${inputs.pin.trim()
                                    ? "bg-green-700 hover:bg-green-700 text-white"
                                    : "bg-gray-400 text-white cursor-not-allowed opacity-20"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* BANK DETAILA MODAL */}
            {/* Enter modal*/}
            {modalType === "bankdetails" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                                    top-[35%] lg:top-0 h-[720px] lg:w-[633px] lg:h-[600px]">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalType(null)}
                            className="right-2 text-black py- flex justify-end items-end "
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-6 h-6" />
                        </button>

                        {/* Input Label */}
                        <p className="text-black lg:text-[26px] text-left text-[14px] font-poppins font-semibold">
                            Bank/Wallet Details </p>
                        <div className='flex flex-col justify-start items-center' >
                            <p className='lg:text-[18px] text-[14px] font-regular text-left '>
                                Your payments will be sent here. Please confirm the details are correct.</p>

                        </div>

                        <div className='flex w-[100%] py-2'>
                            <form className="space-y-4 w-[100%]">
                                <CustomSelectField
                                    label="Bank Name"
                                    name="bankName"
                                    value={inputs.bankName}
                                    onChange={handleChange}
                                    defaultHolder="Select Bank Name"
                                    options={[
                                        "Access Bank",
                                        "Zenith Bank",
                                        "Guaranty Trust Bank (GTBank)",
                                        "First Bank of Nigeria",
                                        "United Bank for Africa (UBA)",
                                        "Fidelity Bank",
                                        "Union Bank",
                                        "Stanbic IBTC Bank",
                                        "Polaris Bank",
                                        "Sterling Bank",
                                        "Wema Bank",
                                        "Ecobank Nigeria",
                                        "Heritage Bank",
                                        "Keystone Bank",
                                        "Jaiz Bank"
                                    ]}
                                    // options={[
                                    //    { value: "us", label: "United States", icon: BankHouseIcon },
                                    //    { value: "ng", label: "Nigeria", icon:CreditCardIcon },
                                    //    { value: "uk", label: "United Kingdom", icon:CreditCardIcon,},
                                    // ]}
                                    leftIcon={BankHouseIcon}
                                    rightIcon={FaChevronDown}
                                />

                                {errors.bankName && (
                                    <p className="text-red-500 text-sm -mt-2">{errors.bankName}</p>
                                )}

                                <InputField
                                    label="Account Number"

                                    // iconSrc="/call-02.svg"
                                    placeholder="Enter Account Number"
                                    name="bankAccountNumber"
                                    value={inputs.bankAccountNumber}
                                    onChange={handleChange}
                                    leftIcon={CreditCardIcon}
                                    error={
                                        showaccountNumbererror ? " Account Number must be at least 10 characters" : ""
                                    }
                                />

                                <InputField
                                    label="Account Holder’s Name"
                                    // iconSrc="/call-02.svg"
                                    placeholder="Enter Account Holder’s Name"
                                    name="bankAccountHolderName"
                                    value={inputs.bankAccountHolderName}
                                    onChange={handleChange}
                                    leftIcon={PlateNumberIcon}
                                    error={
                                        showaccountNameerror ? " Account Holder’s Name must be greater than 3 characters" : ""
                                    }
                                />

                                {errors.bankAccountNumber && (
                                    <p className="text-red-500 text-sm -mt-2">{errors.bankAccountNumber}</p>
                                )}

                                {errors.bankAccountHolderName && (
                                    <p className="text-red-500 text-sm -mt-2">{errors.bankAccountHolderName}</p>
                                )}
                            </form>

                        </div>

                        <CustomButton
                            name="Update"
                            disabled={!inputs.bankAccountHolderName.trim() || !inputs.bankAccountNumber.trim() || !inputs.bankName.trim()}
                            btnClick={handleBankDetailsSubmit}
                            extendedStyles={`font-medium  lg:py-3 py-3 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
                            ${inputs.bankAccountHolderName.trim() && inputs.bankAccountNumber.trim() && inputs.bankName.trim()
                                    ? "bg-green-700 hover:bg-green-700 text-white"
                                    : "bg-gray-500 text-white cursor-not-allowed opacity-50"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* WITHDRAWAL PIN SETUP MODAL */}

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
                        <h4 className="text-black lg:text-[26px] text-[14px] text-left font-poppins font-semibold">
                            Set Up Your Withdrawal PIN </h4>
                        <div className='flex flex-col justify-center items-center' >

                            <p className='lg:text-[16px] text-[14px] font-regular '>For your security, you’ll need a 4-digit PIN to authorize all withdrawals.
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
                        <CustomButton
                            name="Confirm Withdrawal"
                            disabled={!inputs.newPin.trim() || !inputs.confirmNewPin.trim()}
                            btnClick={handlePinUpdate}
                            extendedStyles={`font-medium lg:py-3 py-3 w-full p-3 lg:p-4 rounded-lg bg-green-700 px-4 rounded-xl 
                            ${inputs.newPin.trim() === inputs.confirmNewPin.trim()
                                    ? "bg-green-700 hover:bg-green-700 text-white"
                                    : "bg-gray-400 text-white cursor-not-allowed opacity-20"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* SUCCESS MODAL */}
            <DashboardModal
                isOpen={modalType === "success"}
                onClose={() => setModalType(null)}
                icon={<SuccessIcon className="w-[50px] h-[90px] bg-green-500 flex items-center justify-center rounded-full" />}
                iconBg="bg-green-500"
                title={`You’ve successfully withdrawn ₦${inputs.amount}`}
                message="Your funds will reflect in your bank account ending ••••1234 shortly."
                actionLabel="Back"
                onAction={() => setModalType(null)}
                actionStyles="!bg-green-250 text-green-900"
            />

            {/* FAILED MODAL */}
            <DashboardModal
                isOpen={modalType === "failed"}
                onClose={() => {
                    setModalType(null);
                    onBack();
                }}
                icon={<FailureIcon className="w-[50px] h-[90px] bg-red-500 flex items-center justify-center rounded-full" />}
                iconBg="bg-red-500"
                title="Withdrawal Failed!"
                message={`Your request to withdraw ₦${inputs.amount} was not completed.`}
                actionLabel="Retry"
                onAction={() => setModalType("amount")}
                actionStyles="!bg-green-250 text-green-900"
            />

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

            {/* SUCCESS MODAL
            {modalType === "success" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-4 w-[390px] lg:top-[] 
                                    top-[28%] lg:top-0 h-[335px] lg:w-[640px] lg:h-[380px] justify-center items-center">
                        <button
                            onClick={() => {
                                setModalType(null);

                            }}
                            className="right-2 text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>


                        <div className="lg:w-[90px] lg:h-[90px] w-[90px] h-[90px]
                                     bg-green-500 flex items-center justify-center rounded-full">
                            <SuccessIcon className="w-[50px] h-[90px] bg-green-500 flex items-center justify-center rounded-full" />
                        </div>
                        <p className="font-medium lg:text-[18px] text-[16px] text-center font-poppins ">
                            <span className="font-semibold lg:text-[24px] text-[16px] font-poppins ">
                                You’ve successfully withdrawn ₦{inputs.amount}
                            </span>
                            <br />
                            Your funds will reflect in your bank account ending ••••1234 shortly.</p>
                        <CustomButton
                            btnClick={() => {

                                setModalType(null);

                            }}

                            name="Back"
                            extendedStyles="w-full p-3 lg:p-4 
                                    !bg-green-250 text-green-900 rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )}
            {/* Reset SUCCESS MODAL 
            {modalType === "resetsuccess" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-2 w-[390px] lg:top-[] 
                                    top-[28%] lg:top-0 h-[365px] lg:w-[640px] lg:h-[380px] justify-center items-center">
                        <button
                            onClick={() => {
                                setModalType(null);

                            }}
                            className="right-2 text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>


                        <div className="lg:w-[90px] lg:h-[90px] w-[90px] h-[90px]
                                     bg-green-50 flex items-center justify-center rounded-full">
                            <ResetSuccess className="w-[50px] h-[90px] bg-green-50 flex items-center justify-center rounded-full" />
                        </div>
                        <p className="font-medium lg:text-[18px] text-[16px] text-center font-poppins ">
                            <span className="font-semibold lg:text-[24px] text-[16px] font-poppins ">
                                PIN Set Successfully!
                            </span>
                            <br />
                            You can now securely withdraw your earnings using your PIN.</p>
                        <CustomButton
                            btnClick={() => {

                                setModalType(null);
                                navigate("/dashboard")

                            }}

                            name="Return to Dashboard"
                            extendedStyles="w-full p-3 lg:p-4 
                                    bg-green-700 text-white rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )}
             FAILURE MODAL 
            {modalType === "failed" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-3xl p-6 flex flex-col gap-4 w-[390px] lg:top-[] 
                        top-[28%] lg:top-0 h-[335px] lg:w-[640px] lg:h-[380px] justify-center items-center">

                        <button
                            onClick={() => {
                                setModalType(null)
                                onBack()
                            }}
                            className="right-2  text-black w-full flex justify-end items-end lg:pt-2 pt-4"
                        >
                            <CloseMenuIcon className="lg:w-10 lg:h-10 w-8 h-8" />
                        </button>


                        <div className="lg:w-[90px] lg:h-[90px] w-[90px] h-[90px] bg-red-500 flex items-center justify-center rounded-full">
                            <FailureIcon className=" w-[50px] h-[90px] bg-red-500 flex items-center justify-center rounded-full" />
                        </div>

                        <p className="font-medium lg:text-[18px] text-center font-poppins">
                            <span className="font-semibold lg:text-[18px] font-poppins ">
                                Withdrawal Failed!
                            </span>
                            <br />
                            Your request to withdraw ₦{inputs.amount} was not completed.</p>
                        <CustomButton name="Retry" btnClick={() => {
                            setModalType("amount")
                        }} extendedStyles="w-full p-3 lg:p-4 !bg-green-250 
                        text-green-900 rounded-lg mb-6 mt-4" />


                    </div>
                </div>
            )} */}
        </div>
    )
}
