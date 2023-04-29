import React from "react";
import './Header.css'

function Header(props){
    return(
        <header>
            <span>{props.icone}</span>
            {props.titulo}
        </header>
    );
}

export default Header;