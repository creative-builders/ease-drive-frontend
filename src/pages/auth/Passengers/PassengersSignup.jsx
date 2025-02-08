import { useState } from "react";
import StepOne from "../../../components/passengerStepFlow/StepOne";
import StepTwo from "../../../components/passengerStepFlow/StepTwo";
import { FormProvider } from "../../../hooks/useStepFlowFormContext";

const PassengersSignup = () => {
   const [step,setStep] = useState(1);
   const totalSteps = 2;

   const initialInputFields = [ "firstName", "lastName", "phoneNumber", "email", "password", "confirmPassword"
   ]

   const nextStep = () => setStep(prev => prev + 1)
   const prevStep = () => setStep(prev => prev - 1)

  return (
    <FormProvider initialInputFields={initialInputFields}>
    <div className="min-h-screen px-[4%] lg:px-[8%] py-[4%] bg-gray-500">
        {step === 1 && <StepOne nextStep={nextStep} step={step} totalSteps={totalSteps} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps}/>}
    </div>
    </FormProvider>
  )
}

export default PassengersSignup