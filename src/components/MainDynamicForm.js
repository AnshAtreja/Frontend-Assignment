import React from 'react';
import SubDynamicForm from './Fields/SubDynamicForm'
import { Button } from '@mui/material';
import { FormProvider, useFormContext } from '../context/FormContext';

const DynamicForm = ({uiSchema}) => {
  const {formData} = useFormContext()

  const handleClick = () => {
    console.log(formData)
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
    <FormProvider>
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
      </>
      ) : (
        <div>
          <p>Enter Valid JSON</p>
        </div>
      )}
  </div>
    </FormProvider>
  );
};

export default DynamicForm;
