import "./imagem.css"

function Imagem(props){
    
    const itens = props
    return(
        <div>
            <img src={itens.imagem} alt=""/>
            
        </div>
    )

}

export default Imagem;

