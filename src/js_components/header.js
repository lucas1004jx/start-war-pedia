import React,{Component} from 'react';
import {openMenu} from '../actions/openMenu';
import {closeMenu} from '../actions/closeMenu';
import Button from './ui_components/button';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{
    render(){
        return(
            <header>
                <NavLink to='/'>
             <h1>star war pedia</h1>
             </NavLink>
             <Button name='history' className='history-button'/>
             <form className='search-bar'>
                 <input placeholder='search'/>
             </form>
             
             <div className={`menu-icon ${this.props.menuState}`} onClick={this.props.menuState==='open'?this.props.closeMenu:this.props.openMenu}>
               <span></span>
               <span></span>
               <span></span>
               </div>
            </header>
        )
    }
}

const mapStatetoProps=state=>({
    menuState:state.menuState.menu
})

export default connect(mapStatetoProps,{openMenu,closeMenu})(Header);