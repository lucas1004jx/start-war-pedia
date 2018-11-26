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
    },
    species:{
        data:[],
        next:'',
        prev:'',
        count:0
    },
    vehicles:{
        data:[],
        next:'',
        prev:'',
        count:0
    },
    starships:{
        data:[],
        next:'',
        prev:'',
        count:0
    },
    films:{
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
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_PLANETS:
      return{
          ...state,
          planets:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            }
      }
      case FETCH_SPECIES:
      return{
          ...state,
          species:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            }
      }
      case FETCH_STARSHIPS:
      return{
          ...state,
          starships:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            }
      }
      case FETCH_VEHICLES:
      return{
          ...state,
          vehicles:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            }
      }
      case FETCH_FILMS:
      return{
          ...state,
          films:{
              data:action.payload,
              next:action.next,
              pre:action.rev,
              count:action.count
            }
      }
      default:
      return state;
   }
}