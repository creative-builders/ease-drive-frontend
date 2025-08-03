import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children, initialInputFields = [] }) => {
  const generateIntialState = () => {
    const initialState = {};
    initialInputFields.forEach((inputField) => {
      initialState[inputField] = "";
    });
    return initialState;
  };

const[formData,setFormData] = useState(generateIntialState);
const [inputTouched, setInputTouched] = useState(false);

const handleUpdateFormData = (e) => {
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}));
    setInputTouched(true);
}
return(
<FormContext.Provider value={{ formData, inputTouched, setFormData, handleUpdateFormData}}>
    {children}
</FormContext.Provider>
 );
}

  return (
    <FormContext.Provider value={{ formData, setFormData, handleUpdateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useStepFlowContext = () => useContext(FormContext);
