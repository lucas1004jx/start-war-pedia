import {GET_FILM_NAME} from './types';
import axios from 'axios';

export const getFilmName=(url)=>dispatch=>(
    axios.get(url).then((res)=>{
        console.log('getfilmname',res.data.title);
        return dispatch({
            type:GET_FILM_NAME,
            payload:res.data.title
        })
        
    })
)
