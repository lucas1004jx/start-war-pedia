import {FETCH_FILMS} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/films/';

export const fetchFilms=(url)=>dispath=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_FILMS,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}