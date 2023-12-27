import React from 'react';
import { useFormContext } from '../../context/FormContext';
import { Box, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import SubDynamicForm from './SubDynamicForm';

const GroupField = ({ label, subParameters, validate, description, jsonKey }) => {
    const isRequired = validate && validate.required;
    const {formatLabel} = useFormContext()
    label = formatLabel(label)
  return (
    <Box>
      <Box flexGrow={1} display="flex" alignItems="center">
      <Typography variant="h6">{label}</Typography>
      {isRequired && (
        <span style={{ marginLeft: '8px'}}><span style={{ color: 'red' }}>*</span></span>
        )}
        {description && (
          <Tooltip title={description} arrow>
            <span style={{ marginLeft: '8px' }}><i className="fa-solid fa-circle-info fa-lg" style={{color: '#b839b8'}}></i></span>
        </Tooltip>
        )}
        </Box>
      <SubDynamicForm grpjsonKey={jsonKey} fields={subParameters} />
    </Box>
  );
};

export default GroupField;
