export const validateFormFields = (obj) => {
  
  const { luggage } = obj;

  for (const key in obj) {
    const value = obj[key];

    if (value === null || value === undefined) return false;

    if (typeof value === "string" && value.trim() === "") return false;

    // if (Array.isArray(value) && value.length === 0) return false;
    if (Array.isArray(value)) {
      if (key === "luggageImage" && luggage === "no") continue; // ✅ skip check
      if (value.length === 0) return false;
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      if (!validateFormFields(value)) return false;
    }
  }
  return true;
};
