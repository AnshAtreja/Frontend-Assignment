import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const formatLabel = (label) => {
  // Custom logic to format label (e.g., replace underscores with spaces and capitalize)
  return label.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

export const FormProvider = ({ children }) => {
  const [selectedTabs, setSelectedTabs] = useState({});
  const [formData, setFormData] = useState({});

  const updateSelectedTab = (groupKey, tabValue) => {
    setSelectedTabs((prev) => ({ ...prev, [groupKey]: tabValue }));
  };

  const updateFormData = (jsonKey, value) => {
    setFormData((prevData) => ({ ...prevData, [jsonKey]: value }));
  };

  return (
    <FormContext.Provider value={{ selectedTabs, updateSelectedTab, formatLabel, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
