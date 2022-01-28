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


const ProjectLocationPage: React.FC<IPage> = props => {
  // DISPATCH REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    logging.info(`Loading ${ props.name }`)
  }, [props.name])

  return (
    <>
      <Info></Info>
    </>
  )
}

export default ProjectLocationPage