import React from 'react';
import './styles.scss';

const Card = (props) => {
  return (
    <div className='card--background'>
      <div className='card--container'>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
