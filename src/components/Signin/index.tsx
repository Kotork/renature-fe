import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { FormControl, InputLabel , Input, FormHelperText } from '@mui/material';

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps } from "./interface";

// STYLES
import { Container, Form } from "./styles";

export const Signin: React.FC<IProps> = () => {

  return (
    <Container>
      <Form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </Form>
    </Container>
  );
};