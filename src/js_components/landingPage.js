import React,{Component} from 'react';
import Header from './header';
import Nav from './nav';
import Carrusel from './carrusel';
import {fetchData} from '../actions/fetchData';
import {connect} from 'react-redux';


 class LandingPage extends Component{
   
    render(){
        return(
            <div className='landing-page'>
            <Header/>
            <Nav/>
            <Carrusel/>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    data:state.sw_data
})

export default connect(mapStateToProps,{fetchData})(LandingPage);