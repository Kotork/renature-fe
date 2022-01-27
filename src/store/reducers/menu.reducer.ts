import { OPEN_MENU, CLOSE_MENU } from '../actions/constants'

const initialStates = {
  isOpen: false
}

interface IActionProps {
  type: string;
  payload: string;
}

export function menu(state = initialStates, action:IActionProps){
  switch(action.type){
    case OPEN_MENU:
      return{
        ...state,
        isOpen: action.payload
      }
    case CLOSE_MENU:
      return{
        ...state,
        isOpen: action.payload
      }
    default:
      return state;
  }
}