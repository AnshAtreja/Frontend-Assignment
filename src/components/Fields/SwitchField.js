import { useState, useEffect } from "react";
import { useFormContext } from "../../context/FormContext";
import {
  Switch as MuiSwitch,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

const SwitchField = ({ label, validate, jsonKey }) => {
  const { defaultValue } = validate;

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
          <MuiSwitch
            checked={checked}
            onChange={handleChange}
            color="secondary"
          />
        }
        label={<Typography variant="h6">{label}</Typography>}
      />
    </Box>
  );
};

export default SwitchField;
