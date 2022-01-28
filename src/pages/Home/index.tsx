import React from "react";

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Project, Series, Volunteer, Header2 } from "./styles";


const HomePage: React.FC<IPage> = props => {
  return (
    <>
      <Project href="/project/location">
        <Header2>O Projeto</Header2>
      </Project>

      <Series href="/series/season-1">
        <Header2>A série</Header2>
      </Series>

      <Volunteer href="/volunteer">
        <Header2>Voluntaria-te</Header2>
      </Volunteer>
    </>
  )
}

export default HomePage