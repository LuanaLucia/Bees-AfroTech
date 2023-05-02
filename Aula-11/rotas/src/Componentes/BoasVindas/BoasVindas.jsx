import React from "react";
import "./BoasVindas.css"

function BoasVindas(props){
    return(
        <div className={props.classe}>
            {props.texto}
        </div>
    );
}

export default BoasVindas;