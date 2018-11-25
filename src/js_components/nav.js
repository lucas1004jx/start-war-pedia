import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        return(
            <ul className='nav'>
             <li className='nav-button active'>people</li>
             <li className='nav-button'>spieces</li>
             <li className='nav-button'>planets</li>
             <li className='nav-button'>vehicles</li>
             <li className='nav-button'>starships</li>
             <li className='nav-button'>films</li>
            </ul>
        )
    }
}