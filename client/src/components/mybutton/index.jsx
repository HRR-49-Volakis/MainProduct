import React from 'react';
import ButtonStyles from './ButtonStyles.jsx';

const MyButton = (props) => {
  return (
    <ButtonStyles
      color={props.color}
      hover={props.hover}
      onClick={() => props.click()}
      background={props.background}
    >
      Sign in
    </ButtonStyles>
  );
};

export default MyButton;