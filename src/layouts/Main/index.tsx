import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import { Menu } from "../../components";

// STYLES
import { Container } from "./styles";

document.title = 'Dashboard';

const MainLayout: React.FC<IPage> = props => {
  return (
    <Container>
      <Menu/>
      <Outlet />
    </Container>
  )
}

export default MainLayout;