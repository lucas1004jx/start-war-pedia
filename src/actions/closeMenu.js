import {CLOSE_MENU} from './types';

export const closeMenu=()=>dispatch=>{
    dispatch({
        type:CLOSE_MENU,
        payload:'close'
    })
}