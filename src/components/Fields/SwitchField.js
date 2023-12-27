import { useState, useEffect } from "react";
import { useFormContext } from "../../context/FormContext";
import {
  Switch as MuiSwitch,
  FormControlLabel,
  Box,
  Typography,
  Tooltip
} from "@mui/material";

const SwitchField = ({ label, validate, jsonKey, description }) => {
  const { defaultValue } = validate;
  const isRequired = validate && validate.required;

  const [checked, setChecked] = useState(defaultValue);

  const { formatLabel } = useFormContext();
  label = formatLabel(label);

  const { formData, updateFormData } = useFormContext();
  useEffect(() => {
    if (formData[jsonKey] === undefined) {
      updateFormData(jsonKey, defaultValue);
    }
  }, [defaultValue, jsonKey, formData, updateFormData]);

  const handleChange = () => {
    setChecked((prev) => !prev);
    updateFormData(jsonKey, !checked);
  };

  return (
    <Box display="flex" alignItems="center" marginBottom={2} marginTop={2}>
      <FormControlLabel
        control={
            <>
          <MuiSwitch
            checked={checked}
            onChange={handleChange}
            color="secondary"
            />
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
            </>
          
        }
        label={<Typography variant="h6" marginLeft={1}>{label}</Typography>}
      />
    </Box>
  );
};

export default SwitchField;
