import {FETCH_PEOPLE,FETCH_PLANETS,FETCH_SPECIES,FETCH_STARSHIPS,FETCH_VEHICLES,FETCH_FILMS,FETCH_DATA,GET_FILM_NAME,GET_VEHICLE_NAME,GET_STARSHIP_NAME,GET_PEOPLE_NAME,GET_SPECIE_NAME,GET_PLANET_NAME} from '../actions/types';


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
    detail:{data:{},films:[],vehicles:[],planets:[],starships:[],people:[],species:[]}
    
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
            detail:{data:{},films:[],vehicles:[],planets:[],starships:[],people:[],species:[]}
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
              ...state.detail,
              data:action.payload
          }
      }
      case GET_FILM_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             films:[...state.detail.films,action.payload]
          }
      }
      case GET_VEHICLE_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             vehicles:[...state.detail.vehicles,action.payload]
          }
      }
      case GET_STARSHIP_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             starships:[...state.detail.starships,action.payload]
          }
      }
      case GET_SPECIE_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             species:[...state.detail.species,action.payload]
          }
      }
      case GET_PLANET_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             planets:[...state.detail.planets,action.payload]
          }
      }
      case GET_PEOPLE_NAME:
      return{
          ...state,
          detail:{
            ...state.detail,
             people:[...state.detail.people,action.payload]
          }
      }
      default:
      return state;
   }
}