import { LOGIN } from '../actions/constants'

const initialStates = {
  isOpen: false
}

interface IActionProps {
  type: string;
  payload: string;
}

export function auth(state = initialStates, action:IActionProps){
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}