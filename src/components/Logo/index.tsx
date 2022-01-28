import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps } from "./interface";

// STYLES
import { Container, Image } from "./styles";

// IMAGES
import horizontalLogo from '../../assets/images/logo.png'

export const Logo: React.FC<IProps> = ({ type }) => {

  return (
    <Container>
      <Image src={horizontalLogo} />
    </Container>
  );
};