import UISchemaInput from './components/UISchemaInput';
import React, { useState } from 'react';
import MainDynamicForm from './components/MainDynamicForm';

import './App.css';

function App() {

  const [uiSchema, setUISchema] = useState({});

  const handleSchemaChange = (newSchema) => {
    setUISchema(newSchema);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '1', width: '25%', padding: '10px', borderRight: '1px solid #ccc' }}>
        <UISchemaInput onSchemaChange={handleSchemaChange} />
      </div>
      <div style={{ flex: '3', width: '75%', padding: '10px' }}>
        <MainDynamicForm uiSchema={uiSchema} />
      </div>
    </div>
  );
}

export default App;
