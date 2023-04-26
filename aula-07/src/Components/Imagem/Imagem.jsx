import React from 'react';
import './Imagem.css';

function Imagem(props){
    return(
        <div id='divImagem'>
            <h4>{props.texto}</h4>
            <img src={props.local} alt='logo' />
        </div>
    )
}

export default Imagem;
