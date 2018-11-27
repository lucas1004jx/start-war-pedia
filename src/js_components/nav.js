import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


const navItems=['people','species','planets','vehicles','starships','films'];
  class Nav extends Component{
 
    render(){
        return(
            <nav className={`nav ${this.props.menuState}`}>  
            {navItems.map((nav,index)=>(
                <NavLink className='nav-button'  activeClassName="active" to={`/${nav}`} key={nav}>{nav}</NavLink>
            ))}
           </nav>
        )
    }
}

const mapStateToProps=state=>({
    menuState:state.menuState.menu
})

export default connect(mapStateToProps)(Nav);

