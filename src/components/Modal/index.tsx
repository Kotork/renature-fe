import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModalRedux } from "../../store/actions/modalAction";

// Components modal
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ITimes
} from './styles';

interface IStateModal{
  modal: {
    isOpen: string;
  }
}

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const stateModal = useSelector((state:IStateModal) => {
    return state.modal
  });

  return(

    // setDisplay is value to open or close modal (value received of redux)
    <Container setDisplay={stateModal.isOpen}>
      <ModalContent>
        <ModalHeader>
          Modal
          <ITimes onClick={() => dispatch(closeModalRedux())} />
        </ModalHeader>
        <ModalBody>
          <h2> Modal do redux aberto!</h2>
        </ModalBody>
      </ModalContent>
    </Container>
  )
};

export default Modal;