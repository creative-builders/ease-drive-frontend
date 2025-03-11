import { createContext, useContext, useState } from 'react'

const FormContext  = createContext();

export const  FormProvider = ({ children, initialInputFields = [] }) => {
// const [formData,setFormData] = useState({
//  firstName:"",
//  lastName:"",
//  phoneNumber:"",
//  email:"",
//  password:"",
//  confirmPassword:""
// })
const generateIntialState = () => {
    const initialState = {};
    initialInputFields.forEach(inputField => {
        initialState[inputField] = ""
    })
    return initialState;
}

const[formData,setFormData] = useState(generateIntialState);

const handleUpdateFormData = (e) => {
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
}
return(
<FormContext.Provider value={{ formData, setFormData, handleUpdateFormData}}>
    {children}
</FormContext.Provider>
 );
}

export const useStepFlowContext = () => useContext(FormContext)
