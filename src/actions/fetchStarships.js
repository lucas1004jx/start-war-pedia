import {FETCH_STARSHIPS} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/starships/';

export const fetchStarships=(url)=>dispatch=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispatch({
        type:FETCH_STARSHIPS,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count,
        url:res.url
    }))

}