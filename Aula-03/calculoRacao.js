let button = document.getElementById("calcular");

button.addEventListener("mouseout", mudarCor);
button.addEventListener("click", calcular);


let elementoResultado = document.getElementById("resultado");

function calcular(){
//interpolacao
    elementoResultado.innerHTML = "O babbage deve comer 100g por dia"
    //  elementoResultado.innerHTML = "<span id='racao'>oi</span>";
//   <span id="resultado">"innerHTML"</span>
}

function mudarCor(){

    button.style.backgroundColor= "blueviolet";

}