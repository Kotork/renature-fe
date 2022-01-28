import React from "react";
import { Outlet } from 'react-router-dom'
import { Button } from '@mui/material';

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import { Menu } from "../../components";

// STYLES
import { Container, Header, Volunteer } from "./styles";

document.title = 'Voluntaria-te';

const VolunterLayout: React.FC<IPage> = props => {
  return (
    <Container>
      <Menu/>

      <Header>
        <h1>Voluntaria-te</h1>

        <div>
          <Volunteer>
            <span>Plantar</span>
            <Button type="button" variant='contained' fullWidth color='success'>Saber mais</Button>
          </Volunteer>
        </div>
      </Header>

      <Outlet />
    </Container>
  )
}

export default VolunterLayout;