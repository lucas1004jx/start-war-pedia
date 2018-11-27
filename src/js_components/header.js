import React,{Component} from 'react';

export default class Header extends Component{
    constructor(){
        super();
        this.openMenu=this.openMenu.bind(this);
    }
    openMenu(){
      document.querySelector('.nav').classList.toggle('open');
      document.querySelector('.menu-icon').classList.toggle('open');
    }
    render(){
        return(
            <header>
             <h1>star war pedia</h1>
             <form className='search-bar'>
                 <input placeholder='search'/>
             </form>
             <div className='menu-icon' onClick={this.openMenu}>
            <span></span>
            <span></span>
            <span></span>
            </div>
            </header>
        )
    }
}