import React from "react";
import "./Card.css"
import Button from "../Button/Button";

function Card(props){
    return(
        <div id="main">
            <div id="perfil-post">
                <div id="imagem">
                    <img src={props.imagem} alt="imagem"  />
                </div>
                <div id="texto">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                </div>

            </div>
            <div id="buttons">
                <Button texto="Curtir" />
                <Button texto="Compartilhar" />
            </div>

        </div>
    );
}
export default Card;