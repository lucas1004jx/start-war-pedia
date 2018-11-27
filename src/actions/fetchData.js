import {FETCH_DATA} from './types';
import axios from 'axios';


export const fetchData=(url)=>dispath=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispath({
        type:FETCH_DATA,
        payload:res
    }))

}