import { OPEN_MODAL, CLOSE_MODAL } from '../actions/constants'

const initialStates = {
  isOpen: 'none'
}

interface IActionProps {
  type: string;
  payload: string;
}

export function modal(state = initialStates, action:IActionProps){
  switch(action.type){
    case OPEN_MODAL:
      return{
        ...state,
        isOpen: action.payload
      }
    case CLOSE_MODAL:
      return{
        ...state,
        isOpen: action.payload
      }
    default:
      return state;
  }
}