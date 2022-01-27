import React,{useState} from "react";
import styled from 'styled-components';

import Input from "../../components/Input";
import ButtonComponent from "../../components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentLogin = styled.div`
  width: 30%;
  height: 40%;
  border-radius: 8px;
  background-color: #e5e5e5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentForm = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentInput = styled.div`
  height: 45%;
`;

const ContentSubmit = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Login: React.FC = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function onSubmit(){
    console.log({
      email: userEmail,
      password: userPassword,
    })
  }

  return(
    <Container>
      <ContentLogin>
        <h3>Login</h3>
        <ContentForm>
          <ContentInput>
            <Input 
              label="Email" 
              type="mail" 
              placeholder="meuemail@mail.pt"
              value={userEmail}
              handleChange={(event:string) => setUserEmail(event)}
            />
          </ContentInput>
          <ContentInput>
            <Input 
              label="Password" 
              type="password" 
              placeholder="*********"
              value={userPassword}
              handleChange={(event:string) => setUserPassword(event)}
            />
          </ContentInput>
        </ContentForm>
        <ContentSubmit>
          <ButtonComponent text="Enviar" handleClick={onSubmit}/>
        </ContentSubmit>
      </ContentLogin>
    </Container>
  )
}

export default Login