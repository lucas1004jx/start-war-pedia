import React from 'react';

 export const MenuIcon=({onClick})=>(
    <div className='menu-icon' onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    </div>
)

export const CloseIcon=({onClick})=>(
    <div className='menu-icon open ' onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    </div>
)

