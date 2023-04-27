import React from "react";
import "./BotaoMenu.css";

function BotaoMenu(props){
    return(
        <button id="btnMenu">
            {props.nome}
        </button>
    )
}

export default BotaoMenu;