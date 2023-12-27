import { useEffect } from "react";
import { useFormContext } from "../../context/FormContext";
import { Typography, Tooltip, Input, Box } from "@mui/material";

const TextInputField = ({
  label,
  description,
  validate,
  jsonKey,
  placeholder,
}) => {
  const isRequired = validate && validate.required;
  const isImmutable = validate && validate.immutable;

  const { formatLabel } = useFormContext();
  label = formatLabel(label);

  const { formData, updateFormData } = useFormContext();
  
  const handleOnChange = (event) => {
    const { value } = event.target;
    updateFormData(jsonKey, value);
  };
  
  useEffect(() => {
    if (formData[jsonKey] === undefined) {
      updateFormData(jsonKey, "");
    }
  }, [jsonKey, formData, updateFormData]);


  return (
    <Box display="flex" alignItems="center" marginBottom={2} marginTop={2}>
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
      <Box
        flexShrink={0}
        marginLeft={10}
        marginRight={5}
        borderRadius="4px"
        overflow="hidden"
      >
        <Input
          type="text"
          name={jsonKey}
          placeholder={placeholder}
          required={isRequired}
          readOnly={isImmutable}
          onChange={handleOnChange}
          fullWidth
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid rgb(184, 57, 184)',
            marginRight: '6vh',
          }}
        />
      </Box>
    </Box>
  );
};

export default TextInputField;
