import React, { useEffect } from "react";
import { Tabs, Tab, Tooltip, Box } from "@mui/material";
import { useFormContext } from "../../context/FormContext";

const RadioField = ({ grpjsonKey, validate, jsonKey }) => {
  const { options, defaultValue } = validate;

  const { selectedTabs, updateSelectedTab } = useFormContext();

  const selectedTab = selectedTabs[grpjsonKey] || defaultValue;
  const { formData, updateFormData } = useFormContext();
  useEffect(() => {
    if (formData[jsonKey] === undefined) {
      updateFormData(jsonKey, defaultValue);
    }
  }, [defaultValue, jsonKey, formData, updateFormData]);

  const handleChange = (newValue) => {
    updateSelectedTab(grpjsonKey, newValue);
    updateFormData(jsonKey, newValue);
  };

  useEffect(() => {
    if (selectedTabs[grpjsonKey] === undefined) {
      updateSelectedTab(grpjsonKey, defaultValue);
    }
  }, [defaultValue, grpjsonKey, selectedTabs, updateSelectedTab]);

  return (
    <Box marginBottom={2} marginTop={2}>
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => handleChange(newValue)}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="radio options"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {options.map((option, index) => (
          <Tab
            key={option.value}
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {option.label}
                {option.description && (
                  <Tooltip title={option.description} arrow>
                    <span style={{ marginLeft: "8px" }}>
                      <i
                        className="fa-solid fa-circle-info fa-lg"
                        style={{ color: "#b839b8" }}
                      ></i>
                    </span>
                  </Tooltip>
                )}
              </div>
            }
            value={option.value}
            style={{
              flex: "1",
              maxWidth: "calc(33.333% - 8px)",
              width: "100%",
              margin: index !== options.length - 1 ? "0 8px 0 0" : "0",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default RadioField;
