import {FETCH_DATA} from '../actions/types';

const initialState={
    sw_data:[],
    next:'',
    prev:''
}

export default (state=initialState,action)=>{
   switch(action.type){
      case FETCH_DATA:
      return{
          ...state,
          sw_data:action.payload,
          next:action.next,
          prev:action.pre
      }
      default:
      return state;
   }
}