import { useState } from "react";
import StepOne from '../../../components/driverStepFlow/StepOne'
import StepTwo from '../../../components/driverStepFlow/StepTwo'
import StepThree from '../../../components/driverStepFlow/StepThree'
import StepFour from '../../../components/driverStepFlow/StepFour'
import { FormProvider } from "../../../hooks/useStepFlowFormContext";

const DriverSignup = () => {
   const [step,setStep] = useState(1);
   const totalSteps = 4;

   const initialInputFields = [ "firstName", "lastName", "phoneNumber", "email", "password", "confirmPassword", "Identification", "Document ID", "DOB", "sectionAddress"
   ]

   const nextStep = () => setStep(prev => prev + 1)
   const prevStep = () => setStep(prev => prev - 1)

   console.log(step)
  return (
    <FormProvider initialInputFields={initialInputFields}>
    <div className="h-full w-full">
        {step === 1 && <StepOne nextStep={nextStep} step={step} totalSteps={totalSteps} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps}/>}
        {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps}/>}
        {step === 4 && <StepFour nextStep={nextStep} prevStep={prevStep} step={step} totalSteps={totalSteps}/>}
    </div>
    </FormProvider>
  )
}

export default DriverSignup