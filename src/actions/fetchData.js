import {FETCH_DATA} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/';

export const fetchData=(category)=>dispath=>{
    axios.get(URL+category).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_DATA,
        payload:res.results,
        next:res.next,
        prev:res.previous
    }))

}