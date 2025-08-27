import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children, initialInputFields = [] }) => {
  const generateInitialState = () => {
    const initialState = {};
    initialInputFields.forEach((inputField) => {
      initialState[inputField] = "";
    });
    return initialState;
  };

  const [formData, setFormData] = useState(generateInitialState);
  const [inputTouched, setInputTouched] = useState(false);

  const handleUpdateFormData = (eOrName, value) => {
    if (typeof eOrName === "string") {
      // Direct key/value update
      setFormData((prev) => ({ ...prev, [eOrName]: value }));
      setInputTouched(true);
    } else if (eOrName?.target) {
      // Normal input change event
      const { name, type, value, checked, files } = eOrName.target;

      let newValue = value;
      if (type === "checkbox") newValue = checked;
      if (type === "file") newValue = files ? Array.from(files) : [];

      setFormData((prev) => ({ ...prev, [name]: newValue }));
      setInputTouched(true);
    }
  };

  return (
    <FormContext.Provider
      value={{ formData, inputTouched, setFormData, handleUpdateFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useStepFlowContext = () => useContext(FormContext);
