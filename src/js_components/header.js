import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <header>
             <h1>star war pedia</h1>
             <form className='search-bar'>
                 <input placeholder='search'/>
             </form>
            </header>
        )
    }
}