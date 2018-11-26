import {FETCH_SPECIES} from './types';
import axios from 'axios';

const URL='https://swapi.co/api/species/';

export const fetchSpecies=()=>dispath=>{
    axios.get(URL).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_SPECIES,
        payload:res.results,
        next:res.next,
        prev:res.previous,
        count:res.count
    }))

}