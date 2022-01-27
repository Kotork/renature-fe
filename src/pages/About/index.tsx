import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import ButtonComponent from '../../components/Button';

const AboutPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${ props.name }`)
  }, [props.name])

  return (
    <>
      <p>
        This is the about page!
      </p>

      <Link to='/'>
        <ButtonComponent color='info' text='Go to Homepage'/>
      </Link>
    </>
  )
}

export default AboutPage