import { OPEN_MODAL, CLOSE_MODAL } from './constants'

export function openModalRedux(){
    return{
        type: OPEN_MODAL,
        payload: 'flex'
    }
};

export function closeModalRedux(){
    return{
        type: CLOSE_MODAL,
        payload: 'none'
    }
};