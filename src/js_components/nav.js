import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


const navItems=['people','species','planets','vehicles','starships','films'];
 export default class Nav extends Component{
 
    render(){
        return(
            <div className='nav'>
             {navItems.map((nav,index)=>(
                 <NavLink className='nav-button'  activeClassName="active" onClick={this.props.selectCategory} to={`/${nav}`} key={nav}>{nav}</NavLink>
             ))}
            </div>
        )
    }
}

