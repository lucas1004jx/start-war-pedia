import {FETCH_PEOPLE} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/people/';

export const fetchPeople=()=>dispath=>{
    
    axios.get(URL).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_PEOPLE,
        payload:res.results,
        next:res.next,
        prev:res.previous
    }))

}