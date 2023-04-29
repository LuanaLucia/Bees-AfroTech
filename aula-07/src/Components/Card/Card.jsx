import React from "react";
import './Card.css';
import { Gi3DMeeple } from "react-icons/gi";


function Card(props){
    
    return(
        <div id="principal">
            <div id="imagem">
                <img src={props.imagem}  alt="imagem"/>
            </div>
            <div id="texto" className="teste">
                <h1><Gi3DMeeple />{props.titulo}</h1>
                <p>{props.texto}
                <span id='icone'><Gi3DMeeple /></span></p>
            </div>

        </div>
    );
};

export default Card;