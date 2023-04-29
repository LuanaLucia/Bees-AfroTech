import React from "react";
import "./Button.css"

function Button(props){
    return(
        <button>{props.texto}</button>
    );
}
export default Button;