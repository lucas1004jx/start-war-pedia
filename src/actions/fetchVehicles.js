import {FETCH_VEHICLES} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/vehicles/';

export const fetchVehicles=(url)=>dispatch=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispatch({
        type:FETCH_VEHICLES,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count,
        url:res.url
    }))

}