import React from "react";
import './Cabecalho.css';
import BotaoMenu from "../BotaoMenu/BotaoMenu";

function Cabecalho(props){
    return(
        <header>
            <BotaoMenu nome="Home"/>
            <BotaoMenu nome="Catalogo"/>
        </header>
    )
}

export default Cabecalho;