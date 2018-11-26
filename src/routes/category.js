import React,{Component} from 'react';
import DisplayContent from '../js_components/displayContent';
import Nav from '../js_components/nav';

export  class People extends Component{
    render(){
        return(
             <React.Fragment>
            <Nav/>
            <DisplayContent content='people'/>
            </React.Fragment>
        )
    }
}

export class Planets extends Component{
    render(){
        return(
            <React.Fragment>
            <Nav/>
            <DisplayContent content='planets'/>
            </React.Fragment>
        )
    }
}

export class Species extends Component{
    render(){
        return(
            <React.Fragment>
            <Nav/>
            <DisplayContent content='species'/>
            </React.Fragment>
        )
    }
}

export class Starships extends Component{
   
    render(){
        return(
            <React.Fragment>
            <Nav/>
            <DisplayContent content='starships'/>
            </React.Fragment>
           
        )
    }
}

export class Vehicles extends Component{
   
    render(){
        return( 
            <React.Fragment>
            <Nav/>
            <DisplayContent content='vehicles'/>
            </React.Fragment>
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

