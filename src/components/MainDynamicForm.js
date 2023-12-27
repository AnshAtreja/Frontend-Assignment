import React from 'react';
import SubDynamicForm from './Fields/SubDynamicForm'
import { Button } from '@mui/material';
import { useFormContext } from '../context/FormContext';

const DynamicForm = ({uiSchema}) => {
  const { formData } = useFormContext()

  const handleClick = () => {

    const requiredFields = parsedUiSchema.filter(field => field.validate && field.validate.required);
    const emptyRequiredFields = requiredFields.filter(field => {
      const value = formData[field.jsonKey];
      return value === undefined || value === ""; 
    });
  
    if (emptyRequiredFields.length > 0) {
      console.log("Please fill in all required fields before submitting.");
      return;
    }

    console.log("Form submitted successfully:", formData);
  };
  
  let parsedUiSchema = [{}]

  if (uiSchema && uiSchema.length > 0) {
    try{
      parsedUiSchema = JSON.parse(uiSchema)
    }
    catch(error){

    }
  }

  return (
    <div>
    <h1>Dynamic Form</h1>
    {parsedUiSchema ? (
      <>
      <SubDynamicForm fields={parsedUiSchema} />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        style={{ marginTop: '16px' }}
        className="button-style"
      >
        Submit
      </Button>
      <p>Output in console log</p>
      </>
      ) : (
        <div>
          <p>Enter Valid JSON</p>
        </div>
      )}
  </div>

  );
};

export default DynamicForm;
