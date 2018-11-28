import React from 'react';

const Button=({name,className})=>(
    <button className={className} style={Style}>
     {name}
    </button>
)
const Style={
    'color':'#000',
    'list-style': 'none',
    'text-transform': 'uppercase',
    'font-size': '12px',
    'font-family': 'DeathStar,sans-serif',
    'background-color': '#F6DF20',
    'display': 'inline-block',
    'padding': '5px 10px',
    'cursor': 'pointer',
    'border-radius': '8px',
    'border':'none'
}

export default Button;