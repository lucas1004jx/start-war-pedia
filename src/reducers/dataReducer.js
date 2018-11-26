import {FETCH_PEOPLE} from '../actions/types';
import {FETCH_PLANETS} from '../actions/types';
import {FETCH_SPECIES} from '../actions/types';
import {FETCH_STARSHIPS} from '../actions/types';
import {FETCH_VEHICLES} from '../actions/types';
import {FETCH_FILMS} from '../actions/types';

const initialState={
    people:{
        data:[],
        next:'',
        prev:'',
        count:0
    },
    planets:{
        data:[],
        next:'',
        prev:'',
        count:0
    }
    
}

export default (state=initialState,action)=>{
   switch(action.type){
      case FETCH_PEOPLE:
      return{
          ...state,
          people:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      case FETCH_PLANETS:
      return{
          ...state,
          planets:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      case FETCH_SPECIES:
      return{
          ...state,
          people:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      case FETCH_STARSHIPS:
      return{
          ...state,
          people:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      case FETCH_VEHICLES:
      return{
          ...state,
          people:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      case FETCH_FILMS:
      return{
          ...state,
          people:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            },
          next:action.next,
          prev:action.pre
      }
      default:
      return state;
   }
}