import React from 'react';
import MyInputStyles from './MyInputStyles.jsx';

const MyInput = (props) => {
  return (
    <MyInputStyles
      className="shell"
      dimensions={props.dimensions}
    >
      <img
        className="icon"
        src={props.source}
      />
      <input
        type={props.type}
        value={props.value}
        placeholder={props.holder || ''}
        onChange={(e) => props.change(e.target.value)}
      />
    </MyInputStyles>
  );
};

export default MyInput;