import {FETCH_STARSHIPS} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/starships/';

export const fetchStarships=()=>dispath=>{
    axios.get(URL).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_STARSHIPS,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}