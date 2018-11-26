import React,{Component} from 'react';
import DisplayContent from '../js_components/displayContent';

export  class People extends Component{
    render(){
        return(
            <DisplayContent content='people'/>
        )
    }
}

export class Planets extends Component{
    render(){
        return(
            <DisplayContent content='planets'/>
        )
    }
}

export class Species extends Component{
    render(){
        return(
            <DisplayContent content='species'/>
        )
    }
}

export class Starships extends Component{
   
    render(){
        return(
            <DisplayContent content='starships'/>
           
        )
    }
}

export class Vehicles extends Component{
   
    render(){
        return( 
            <DisplayContent content='vehicles'/>
        )
    }
}

export class Films extends Component{
    render(){
        return(
            <DisplayContent content='films'/>
        )
    }
}

