import React from 'react';

import './ComponenteCaracter.css';

const ComponenteCaracter = (props)=>{
    return <span className="compoCaracter" onClick={props.borra}>{props.caracter}</span>
}

export default ComponenteCaracter;