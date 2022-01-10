import React from 'react';

import './styles.css';

const ErrorMessage = ({ text, error }) => (
  <div className="errorText" id="error">
    {text}
  </div>
);

export default ErrorMessage;
