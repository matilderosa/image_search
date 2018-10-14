import React from 'react';
import './styles.scss';

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      <span className="button--text">
        {children}
      </span>
    </button>
  );
};

export default Button;
