import React from 'react';
import { Button } from 'reactstrap'

// INTERFACES
import { IButton } from './interface'

// STYLES
import { ButtonText } from './styles';

const ButtonComponent : React.FC<IButton> = ({ color, text, typeButton='button', handleClick = () => {} }) => {
  return (
    <Button color={color ? color : 'primary'} onClick={handleClick} type={typeButton}>
      <ButtonText>
        {text ? text : 'Missing text'}
      </ButtonText>
    </Button>
  )
}

export default ButtonComponent;

