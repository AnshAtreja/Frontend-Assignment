import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import './customCSS/UISchemaInput.css';
import { useFormContext } from '../context/FormContext';

const UISchemaInput = ({ onSchemaChange }) => {
  const [uiSchema, setUISchema] = useState('');
  const textareaRef = React.createRef();

  const { clearFormData } = useFormContext() 

  const handleInputChange = () => {
    const inputValue = textareaRef.current.value;
    setUISchema(inputValue);
    onSchemaChange(inputValue);
  };

  const handleClearClick = () => {
    setUISchema('');
    onSchemaChange('');
    clearFormData();
  };

  return (
    <div className="ui-schema-input">
      <Typography variant="h5" gutterBottom>
        UI Schema Input
      </Typography>
      <textarea
        ref={textareaRef}
        placeholder="Paste UI Schema JSON here..."
        value={uiSchema}
        onChange={handleInputChange}
        className="custom-scrollbar"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClearClick}
        style={{ marginTop: '16px' }}
        className="button-style"
      >
        Clear
      </Button>
    </div>
  );
};

export default UISchemaInput;
