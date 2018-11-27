import React from 'react';

const Preloader=()=>(
    <div className='preloader'>
       <span className='loading-text'>Loading</span>  
       <div className='circles'>
       <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
       </div>   
    </div>
)

export default Preloader;