import React from "react";
import "./Galeria.css"
import Imagem from "../../Componentes/Imagem/Imagem";
import Juno from "../../assets/Juno.jpg"
import Babbage from "../../assets/Babbage.jpg"

function Galeria() {
    return (
        <div>
            <Imagem local={Juno} texto="Juno" />
            <Imagem local={Babbage} texto="Babbage" />
        </div>
    )
}
export default Galeria;