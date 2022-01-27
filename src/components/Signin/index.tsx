import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps } from "./interface";

// STYLES
import { Container } from "./styles";

export const Signin: React.FC<IProps> = () => {

  return (
    <Container>
      <CssBaseline />
      <Box />
    </Container>
  );
};