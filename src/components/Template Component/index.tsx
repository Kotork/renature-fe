import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps } from "./interface";

// STYLES
import { Container } from "./styles";

export const Template: React.FC<IProps> = () => {

  return (
    <Container>

    </Container>
  );
};