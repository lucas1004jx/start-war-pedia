import React,{Component} from 'react';
import Header from './header';
import Nav from './nav';
import Carrusel from './carrusel';



 export default class PeoplePage extends Component{
   
    render(){
        return(
            <div className='main-page'>
            <Header/>
            <Nav/>
            <Carrusel name='species'/>
            </div>
        )
    }
}

