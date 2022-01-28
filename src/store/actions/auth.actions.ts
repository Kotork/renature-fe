import { LOGIN } from './constants'

export const login = (data: any) => {
    return {
        type: LOGIN,
        payload: data
    }
}