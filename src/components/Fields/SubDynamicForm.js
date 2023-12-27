import React from 'react';
import TextInputField from './TextInputField';
import RadioField from './RadioField';
import GroupField from './GroupField.js';
import IgnoreField from './IgnoreField.js';
import SelectField from './SelectField.js';
import SwitchField from './SwitchField.js';

const sortFields = (fields) => {
  if (fields && fields.length > 0) {
    return fields.slice().sort((a, b) => a.sort - b.sort);
  }
  return fields;
};

const SubDynamicForm = ({ fields, grpjsonKey }) => {

  if (!Array.isArray(fields)) {
    return (
      <div>
        <p>Enter Valid JSON</p>
      </div>
    );
  }
  
  const sortedFields = sortFields(fields);
  
  return (
    <div>
      {sortedFields ? (
        sortedFields.map((field) => {
          switch (field.uiType) {
            case 'Input':
              return <TextInputField key={field.jsonKey} {...field} />;
            case 'Radio':
              return <RadioField key={field.jsonKey} {...field} grpjsonKey={grpjsonKey}/>;
            case 'Group':
              return <GroupField key={field.jsonKey} {...field} />;
            case 'Ignore':
              return <IgnoreField key={field.jsonKey} {...field} grpjsonKey={grpjsonKey}/>;
            case 'Select':
              return <SelectField key={field.jsonKey} {...field} />;
            case 'Switch':
              return <SwitchField key={field.jsonKey} {...field} />;
            default:
              return <div key={"NoKey"}><p>Nothing to display</p></div>;
          }
        })
      ) : (
        <div>
          <p>Nothing to display</p>
        </div>
      )}
    </div>
  );
};

export default SubDynamicForm;
