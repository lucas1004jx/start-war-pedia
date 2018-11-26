import {FETCH_PLANETS} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/planets/';

export const fetchPlanets=()=>dispath=>{
    console.log('planets');
    
    axios.get(URL).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_PLANETS,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}