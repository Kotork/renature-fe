import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormControl, FormGroup, OutlinedInput, IconButton, InputLabel, FormHelperText, TextField, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// ACTIONS
import { login } from "../../store/actions";

// INTERFACES
import { IProps, IForm } from "./interface";

// STYLES
import { Container, Form } from "./styles";

export const Signin: React.FC<IProps> = ({ isSignin, setIsSignin }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors }} = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data)
    dispatch(login(data))
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <h1>Log in</h1>
        <FormGroup>
          <TextField
            label='Email'
            placeholder='email@dominio.pt'
            type='email'
            { ...register('email', { required: true }) }
          />
            { errors.email && <FormHelperText>Email é necessário.</FormHelperText>}
        </FormGroup>

        <FormControl variant='outlined'>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <OutlinedInput
            label='Password'
            placeholder='*******'
            type={showPassword?"text":"password"}
            { ...register('password', { required: true }) }
            endAdornment = {
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={ (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault() }
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          { errors.email && <FormHelperText>Password é necessária.</FormHelperText>}
        </FormControl>

        <Button type="submit" variant='contained' size='large' color='success'>Entrar</Button>
      </Form>

      <p>Não tem conta? <span onClick={ () => setIsSignin(!isSignin) }>Sign Up</span></p>
    </Container>
  );
};