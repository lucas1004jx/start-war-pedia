import {GET_FILM_NAME,GET_VEHICLE_NAME,GET_STARSHIP_NAME,GET_PEOPLE_NAME,GET_SPECIE_NAME,GET_PLANET_NAME} from './types';
import axios from 'axios';

export const getFilmName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_FILM_NAME,
            payload:res.data.title
        })
        
    )
)

export const getVehicleName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_VEHICLE_NAME,
            payload:res.data.name
        })
        
    )
)

export const getStarshipName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_STARSHIP_NAME,
            payload:res.data.name
        })
        
    )
)

export const getPlanetName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_PLANET_NAME,
            payload:res.data.name
        })
        
    )
)
export const getSpecieName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_SPECIE_NAME,
            payload:res.data.name
        })
        
    )
)
export const getPeopleName=(url)=>dispatch=>(
    axios.get(url).then((res)=>   
      dispatch({
            type:GET_PEOPLE_NAME,
            payload:res.data.name
        })
        
    )
)