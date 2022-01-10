import React, { useState } from 'react';

import PromptForm from '../../components/PromptForm';
import Table from '../../components/Table';
import ErrorMessage from '../../components/ErrorMessage';

import './styles.css';

const Form = () => {
  const [resultData, setResultData] = useState([]);
  const [requestText, setRequestText] = useState('');
  const [error, setError] = useState(null);

  return (
    <div className="formContainer">
      <PromptForm
        setResultData={setResultData}
        setRequestText={setRequestText}
        setError={setError}
      />
      {!error ? (
        <Table data={resultData} />
      ) : (
        <ErrorMessage text={requestText} error={error} />
      )}
    </div>
  );
};

export default Form;
