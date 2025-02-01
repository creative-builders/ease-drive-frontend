import { useState } from "react";
import StepOne from "../../../components/passengerStepFlow/StepOne";
import StepTwo from "../../../components/passengerStepFlow/StepTwo";
import { FormProvider } from "../../../hooks/useStepFlowFormContext";

const PassengersSignup = () => {
   const [step,setStep] = useState(1);

   const initialInputFields = [ "firstName", "lastName", "phoneNumber", "email", "password", "confirmPassword"
   ]

   const nextStep = () => setStep(prev => prev + 1)
   const prevStep = () => setStep(prev => prev - 1)

   console.log(step)
  return (
    <FormProvider initialInputFields={initialInputFields}>
    <div>
        {step === 1 && <StepOne nextStep={nextStep}/>}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep}/>}
    </div>
    </FormProvider>
  )
}

export default PassengersSignup