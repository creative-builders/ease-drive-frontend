import { useState } from "react";
// import StepOne from '../../../components/driverStepFlow/StepOne';
import { StepOne } from '../../../components/driverKycStepFlow/StepOne';
import { StepTwo } from '../../../components/driverKycStepFlow/StepTwo';
import { StepThree } from '../../../components/driverKycStepFlow/StepThree';
import { StepFour } from '../../../components/driverKycStepFlow/StepFour';
import { FormProvider } from "../../../hooks/useStepFlowFormContext";
// import { useMutation } from "@tanstack/react-query"; 
// import { driverSignUpAuth } from "../../../store/auth/driver/api";

export const DriverKycPage = () => {
   const [step, setStep] = useState(1);
   const totalSteps = 4;

   // Corrected Initial State (Now it's an object instead of an array)
   const initialInputFields = {

      documentType: "", 
    
      dob: "", 
      documentURL: "", 
      meansOfIdentification: "", 
      bankName: "",
      bankAccountNumber: "", 
      bankAccountHolderName: "",
      vehiclePhotos: [], 
      vehicleColor: "", 
      numberOfSeats: "", 
      serviceArea: "",
      plateNumber: "", 
      vehicleType: "", 
      profileImage: [],
      documentID: "", 
      documentPhotos: []
   };

   // const [signupData, setSignupData] = useState(initialInputFields);

   const nextStep = () => setStep((prev) => prev + 1);
   const prevStep = () => setStep((prev) => prev - 1);

   // Setup mutation using useMutation
   // const { mutate: submitSignup, isLoading } = useMutation(
   //    (credentials) => driverSignUpAuth(credentials),
   //    {
   //       onSuccess: (response) => {
   //          console.log("Signup successful:", response);
   //          // Navigate to success page or next step if needed
   //       },
   //       onError: (error) => {
   //          console.error("Signup failed:", error.response?.data || error.message);
   //       },
   //    }
   // );

   // const handleChange = (e) => {
   //    const { name, value } = e.target;
   //    setSignupData((prev) => ({
   //       ...prev,
   //       [name]: value
   //    }));
   // };

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    console.log("Submitting API call with:", signupData); // Debugging log
   //    submitSignup(signupData);
   // };
   // console.log(step, totalSteps)
   return (
      <FormProvider initialInputFields={Object.keys(initialInputFields)}>
         <div className="h-full w-full">
                  <div className="min-h-screen flex flex-col lg:flex-row lg:items-center 
      justify-center bg-[linear-gradient(123deg,_#FDFDFD_3.85%,_#F4EDFA_35.58%,_#F1FBF2_56%,_#EEE1F8_81.24%,_#FDFDFD_101.6%)]">
        <div className="flex justify-center gap-x-[31px] bg-gradient-to-r
     lg:w-[1164px] lg:h-[100%]
      lg:bg-white lg:bg-none shadow-[0_1px_15.5px_0_rgba(0,0,0,0.05)] p-4 lg:px-[40.5px]">
            {step === 1 && <StepOne nextStep={nextStep} step={step} totalSteps={totalSteps} />}
            {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps} />}
            {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps} />}
            {step === 4 && (
               <StepFour
                  nextStep={nextStep}
                  prevStep={prevStep}
                  step={step}
                  totalSteps={totalSteps}
               // handleChange={handleChange}
               // handleSubmit={handleSubmit}
               // isLoading={isLoading}
               />
            )}
         </div>
         </div>
         </div>
      </FormProvider>
   );
};


