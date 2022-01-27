import { OPEN_MENU, CLOSE_MENU } from './constants'

export const openMenu = () => {
    return{
        type: OPEN_MENU,
        payload: true
    }
};

export const closeMenu = () => {
    return{
        type: CLOSE_MENU,
        payload: false
    }
};