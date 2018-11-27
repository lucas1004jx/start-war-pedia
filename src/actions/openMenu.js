import {OPEN_MENU} from './types';

export const openMenu=()=>dispatch=>{
    dispatch({
        type:OPEN_MENU,
        payload:'open'
    })
}