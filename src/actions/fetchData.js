import {FETCH_DATA} from './types';
import axios from 'axios';

export const fetchData=(url)=>dispatch=>{
    axios.get(url).then((res)=>res.data)
    .then((res)=> 
        dispatch({
        type:FETCH_DATA,
        payload:res
    })
    )

}