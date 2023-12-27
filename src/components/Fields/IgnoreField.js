// IgnoreField.jsx
import React from 'react';
import SubDynamicForm from './SubDynamicForm';
import { useFormContext } from '../../context/FormContext';

const IgnoreField = ({ conditions, subParameters, grpjsonKey }) => {
  const { selectedTabs } = useFormContext();
  const selectedTab = selectedTabs[grpjsonKey]

  const shouldShowField = () => {
    if (!conditions || conditions.length === 0) {
      return true;
    }

    return conditions.every((condition) => {
      const { op, value } = condition;

      switch (op) {
        case '==':
          return selectedTab === value;
        default:
          return true; 
      }
    });
  };

  return shouldShowField() ? (
    <div>
      {subParameters && (
        <SubDynamicForm fields={subParameters} />
      )}
    </div>
  ) : null;
};

export default IgnoreField;
