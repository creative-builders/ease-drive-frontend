import { createContext, useContext, useState } from "react";
import { validateFormFields } from "../utils/validateFormFields";



const FormContext = createContext();

export const FormProvider = ({ children, initialInputFields = {} }) => {
  const [formData, setFormData] = useState(initialInputFields);
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

   const isFormValid = validateFormFields(formData)

  return (
    <FormContext.Provider
      value={{ formData, inputTouched, setFormData, handleUpdateFormData , isFormValid}}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useStepFlowContext = () => useContext(FormContext);
