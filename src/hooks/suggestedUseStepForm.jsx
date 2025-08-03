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

  const [formData, setFormData] = useState(generateIntialState());

  const handleUpdateFormData = (eOrKey, value) => {
    if (typeof eOrKey === "string") {
      // Direct key-value update
      setFormData((prev) => ({
        ...prev,
        [eOrKey]: value,
      }));
    } else if (eOrKey?.target?.name) {
      // Event-based update
      const { name, value } = eOrKey.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, handleUpdateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useStepFlowContext = () => useContext(FormContext);
