import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const formatLabel = (label) => {
  return label.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

export const FormProvider = ({ children }) => {
  const [selectedTabs, setSelectedTabs] = useState({});
  const [formData, setFormData] = useState({});

  const updateSelectedTab = (groupKey, tabValue) => {
    setSelectedTabs((prev) => ({ ...prev, [groupKey]: tabValue }));
  };

  const updateFormData = (jsonKey, value) => {
    setFormData((prev) => ({ ...prev, [jsonKey]: value }));
  };

  const clearFormData = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ selectedTabs, updateSelectedTab, formatLabel, formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
