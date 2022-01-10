import React from 'react';

import './styles.css';

const Button = ({ onClick, label }) => (
  <button onClick={onClick} name="button" className="button">
    {label}
  </button>
);

export default Button;
