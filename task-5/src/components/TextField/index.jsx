import React from 'react';

import './styles.css';

const TextField = ({
  placeholder = 'Enter your text',
  label = '',
  inputValue,
  onChange,
}) => (
  <label className="labelContainer">
    <p className="label">{label}</p>
    <input
      onChange={onChange}
      className="textField"
      placeholder={placeholder}
      type="text"
      value={inputValue}
    />
  </label>
);

export default TextField;
