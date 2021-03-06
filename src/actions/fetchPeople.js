import {FETCH_PEOPLE} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/people/';

export const fetchPeople=(url)=>dispatch=>{
    
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispatch({
        type:FETCH_PEOPLE,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count,
        url:res.url
    }))

}