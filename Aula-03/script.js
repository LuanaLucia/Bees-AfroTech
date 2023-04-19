let numA = 2000;
let numB = 300;
let numC = 40;

let resultado = numA > numB ? "eh maior" : "eh menor"

// (validacao) ? (se verdadeiro) : (se falso)

console.log(resultado);

if (numA > numB) {
    if (numA > numC) {
        console.log(numA + "eh o maior")
        if (numA % 2 != 0) {
            console.log(numA + " eh par")
        }
    }
}
else if (numB > numA && numB > numC) {
    console.log(numB + " eh o maior")
} else {
    console.log(numC + " eh o maior")
}

/*fsdfjhghg
nbnb
adfgadf*/
//imprimir na tela todos os numeros pares de 0 a 20
// for
// if
for (let i = 0; i<20; i++){
    if(i%2==0){
        console.log(i);
    }
}
// 3/2=1.5 % == 5
// 4/2=2 % ==0

// 3%2 == 0
