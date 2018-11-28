import {FETCH_PEOPLE,FETCH_PLANETS,FETCH_SPECIES,FETCH_STARSHIPS,FETCH_VEHICLES,FETCH_FILMS,FETCH_DATA,GET_FILM_NAME} from '../actions/types';


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
    },
    detail:{data:{},films:[]}
    
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
            },
            detail:{data:{},films:[]}
      }
      case FETCH_PLANETS:
      return{
          ...state,
          planets:{
              data:action.payload,
              next:action.next,
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_SPECIES:
      return{
          ...state,
          species:{
              data:action.payload,
              next:action.next,
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_STARSHIPS:
      return{
          ...state,
          starships:{
              data:action.payload,
              next:action.next,
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_VEHICLES:
      return{
          ...state,
          vehicles:{
              data:action.payload,
              next:action.next,
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_FILMS:
      return{
          ...state,
          films:{
              data:action.payload,
              next:action.next,
              prev:action.prev,
              count:action.count
            }
      }
      case FETCH_DATA:
      return{
          ...state,
          detail:{
              data:action.payload,
              films:[...state.detail.films]
          }
      }
      case GET_FILM_NAME:
      return{
          ...state,
          detail:{
             data: {...state.detail.data},
             films:[...state.detail.films,action.payload]
          }
      }
      default:
      return state;
   }
}