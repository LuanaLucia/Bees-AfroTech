let button = document.getElementById("calcular");

button.addEventListener("mouseout", mudarCor);
button.addEventListener("click", calcular);


let elementoResultado = document.getElementById("resultado");

function calcular(){
//interpolacao
    let nomeCachorro = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;

    let qtdRacao = peso * 0.01 * 1000;
    //console.log(nome.nomeCachorro)
    
    elementoResultado.innerHTML = `${nomeCachorro} deve comer ${qtdRacao}g por dia`
    
    //  elementoResultado.innerHTML = "<span id='racao'>oi</span>";
//   <span id="resultado">"innerHTML"</span>
}

function mudarCor(){

    button.style.backgroundColor= "blueviolet";

}