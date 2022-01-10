import React, { useState } from 'react';
import axios from 'axios';

import TextInput from '../TextField';
import Button from './../Button';

import { API } from '../../constants';

import './styles.css';

const PromptForm = ({ setResultData, setRequestText, setError }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = async (value) => {
    try {
      const { status, statusText, data } = await axios({
        method: 'GET',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: `${API}/words?rel_rhy=${value}`,
      });

      if (status !== 200) {
        setRequestText(statusText);
        setError(status);
      }

      setResultData(data);
      console.log(data);
    } catch (error) {
      setRequestText(error.message);
      setError(error.name);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <TextInput
        label="Enter word:"
        inputValue={inputValue}
        onChange={handleChange}
      />
      <Button
        label="Click"
        onClick={() => handleClick(inputValue)}
        value={inputValue}
      />
    </div>
  );
};

export default PromptForm;
