import React from "react";

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Season, Preview, Title, Episode } from "./styles";

const SeasonOnePage: React.FC<IPage> = props => {
  return (
    <Season>
      <Preview>
        <Title>The Why</Title>
        <Episode>Episódio 1</Episode>
      </Preview>

      <Preview>
        <Title>The Who</Title>
        <Episode>Episódio 2</Episode>
      </Preview>

      <Preview>
        <Title>The How - Part 1</Title>
        <Episode>Episódio 3</Episode>
      </Preview>

      <Preview>
        <Title>The How - Part 2</Title>
        <Episode>Episódio 4</Episode>
      </Preview>

      <Preview>
        <Title>The Vision</Title>
        <Episode>Episódio 5</Episode>
      </Preview>
    </Season>
  )
}

export default SeasonOnePage