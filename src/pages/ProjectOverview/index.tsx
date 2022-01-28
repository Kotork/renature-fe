import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import ButtonComponent from '../../components/Button';
import Modal from "../../components/Modal";

// ACTION TO OPEN MODAL
import { openModalRedux } from '../../store/actions/modalAction'

//STYLES
import { Info } from "./styles";

// IMAGES
import monchiqueTxt from '../../assets/images/monchiqueTxt.png'

const ProjectOverviewPage: React.FC<IPage> = props => {
  // DISPATCH REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    logging.info(`Loading ${ props.name }`)
  }, [props.name])

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