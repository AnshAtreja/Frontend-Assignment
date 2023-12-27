import { useState, useEffect } from "react";
import { useFormContext } from "../../context/FormContext";
import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  Box,
  Tooltip,
} from "@mui/material";

const SelectField = ({ label, validate, value, description, jsonKey }) => {
  const { options, defaultValue } = validate;
  const isRequired = validate && validate.required;
  const [selectedValue, setSelectedValue] = useState(value || defaultValue);
  const { formatLabel } = useFormContext();
  label = formatLabel(label);
  const { formData, updateFormData } = useFormContext();
  useEffect(() => {
    if (formData[jsonKey] === undefined) {
      updateFormData(jsonKey, defaultValue);
    }
  }, [defaultValue, jsonKey, formData, updateFormData]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    updateFormData(jsonKey, newValue);
  };

  return (
    <Box marginBottom={2} marginTop={2}>
      <FormControl fullWidth>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box flexGrow={1} display="flex" alignItems="center">
            <Typography variant="h6" gutterBottom>
              {label}
            </Typography>
            {isRequired && (
              <span style={{ marginLeft: "8px" }}>
                <span style={{ color: "red" }}>*</span>
              </span>
            )}
            {description && (
              <Tooltip title={description} arrow>
                <span style={{ marginLeft: "8px" }}>
                  <i
                    className="fa-solid fa-circle-info fa-lg"
                    style={{ color: "#b839b8" }}
                  ></i>
                </span>
              </Tooltip>
            )}
          </Box>

          <Select
            value={selectedValue}
            onChange={handleChange}
            fullWidth
            sx={{
              border: "1px solid rgb(184, 57, 184)",
              width: "58%",
              marginRight: "6vh",
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SelectField;
