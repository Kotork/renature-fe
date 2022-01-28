import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import { Menu } from "../../components";

// STYLES
import { Container, Left, Header1, Header2 } from "./styles";

document.title = 'Dashboard';

const ProjectLayout: React.FC<IPage> = props => {
  return (
    <Container>
      <Menu/>

      <Left>
        <Header1>projeto</Header1>
        <Header2>renature monchique</Header2>
      </Left>

      <Outlet />
    </Container>
  )
}

export default ProjectLayout;