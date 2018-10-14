import React from 'react';
import './styles.scss';

const Input = ({
                 label, value, onChange,
               }) => {
  return (
    <div className="input--container">
      <label className="label">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default Input;