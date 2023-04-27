import React from 'react';
import './imagem.css';

function Filme (props) {
    return(
        <div>
            <span>
                <h1>{props.texto}</h1>
                <img src={props.imagem} alt="capa do filme" />
            </span>
            <p>{props.texto}</p>
        </div>
    )
}

export default Filme;
