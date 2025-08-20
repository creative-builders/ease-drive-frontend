
import { createContext, useContext, useState } from 'react'

const FormContext  = createContext();

export const  FormProvider = ({ children, initialInputFields = [] }) => {
const generateIntialState = () => {
    const initialState = {};
    initialInputFields.forEach(inputField => {
        initialState[inputField] = ""
    })
    return initialState;
}

const[formData,setFormData] = useState(generateIntialState);
const [inputTouched, setInputTouched] = useState(false);

// const handleUpdateFormData = (e) => {
//     setFormData(prev => ({...prev,[e.target.name]:e.target.value}));
//     setInputTouched(true);
// }

const handleUpdateFormData = (nameOrEvent, value) => {
  if (typeof nameOrEvent === "string") {
    // Called with explicit name + value
    setFormData(prev => ({ ...prev, [nameOrEvent]: value }));
  } else {
    // Called with event
    const e = nameOrEvent;
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  setInputTouched(true);
};

return(
<FormContext.Provider value={{ formData, inputTouched, setFormData, handleUpdateFormData}}>
    {children}
</FormContext.Provider>
 );
}

export const useStepFlowContext = () => useContext(FormContext)

