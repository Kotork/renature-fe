import React from "react";

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Info } from "./styles";

// IMAGES
import monchiqueTxt from '../../assets/images/monchiqueTxt.png'

const ProjectOverviewPage: React.FC<IPage> = props => {
  return (
    <Info>
      <h2>Visão Geral</h2>
      <img src={monchiqueTxt} alt="" />

      <p>
        O modelo desenvolvido para o projeto Renature Monchique para a restauração ecológica aposta no custo versus impacto. Trabalhando através de uma ONG, a Ryanair e parceiros públicos, criaram uma plataforma público-privada baseada em parcerias, que são essenciais para uma restauração de larga escala.
      </p>

      <p>
        Desde 2019 o projeto Renature Monchique conseguiu iniciar o processo de restauração ecológica em 587 hectares de terras danificadas pelo incêndio, tendo sido plantadas 137.000 árvores de 9 espécies desta região. Estas plantações ocorrem entre Setembro e Março devido às condições atmosféricas mais chuvosas.
      </p>
    </Info>
  )
}

export default ProjectOverviewPage