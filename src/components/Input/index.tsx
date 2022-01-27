import React from "react";

import {
    Container,
    ContentInput
} from './styles'
import { IProps, IEvent } from './interface'


const Input: React.FC<IProps > = ({
  label,
  type,
  placeholder,
  value,
  handleChange
}) => {
  return(
    <Container>
        <p>{label}</p>
        <ContentInput 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          onChange={(event:IEvent) => handleChange(event.target.value)}
        />      
    </Container>
  )
}

export default Input