import {OPEN_MENU, CLOSE_MENU} from '../actions/types';

const initialState={
    menu:'false'
}

export default (state=initialState,action)=>{
 switch(action.type){
     case OPEN_MENU:
     return{
        menu:action.payload
     }
     case CLOSE_MENU:
     return{
         menu:action.payload
     }
     default:
     return state;
 }
}



