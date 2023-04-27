import React from "react";
import "./BotaoMenu.css"

function BotaoMenu(props){
    return(
        <button>
            {props.nome}
        </button>
    )
}

export default BotaoMenu;