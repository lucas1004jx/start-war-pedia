import {FETCH_VEHICLES} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/vehicles/';

export const fetchVehicles=()=>dispath=>{
    axios.get(URL).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_VEHICLES,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}