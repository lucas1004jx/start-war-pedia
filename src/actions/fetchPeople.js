import {FETCH_PEOPLE} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/people/';

export const fetchPeople=(url)=>dispath=>{
    
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_PEOPLE,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}