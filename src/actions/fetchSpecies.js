import {FETCH_SPECIES} from './types';
import axios from 'axios';

//const URL='https://swapi.co/api/species/';

export const fetchSpecies=(url)=>dispatch=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispatch({
        type:FETCH_SPECIES,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count,
        url:res.url
    }))

}