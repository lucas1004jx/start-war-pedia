import React from 'react';

const Button=({name,className})=>(
    <button className={className} style={Style}>
     {name}
    </button>
)
const Style={
    'color':'#000',
    'listStyle': 'none',
    'textTransform': 'uppercase',
    'fontSize': '12px',
    'fontFamily': 'DeathStar,sans-serif',
    'backgroundColor': '#F6DF20',
    'display': 'inline-block',
    'padding': '5px 10px',
    'cursor': 'pointer',
    'borderRadius': '8px',
    'border':'none'
}

export default Button;