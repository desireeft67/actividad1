var numero;

//funcion para que sea positivo
function esPositivo(numero){
    return !isNaN(numero) && numero >= 0 && numero % 1 == 0;

}

// para introducir un numero mientras que sea positivo
do {
    numero = prompt("Introduce un numero entre 1 y 100 :");

    if(!esPositivo){
        alert("Error: debes ingresar un numero entero entre 1 y 100");
    }
} while (!esPositivo(numero));

console.log("Has introducido el numero: "+numero);

const MAXIMO = 100;
const MINIMO = 1;
const DIVISORES = [2, 3, 5, 10];

var divisoresEncontrados;

for (var i=0; i < DIVISORES.length; i++){
    const divisor = DIVISORES[i];
    if(numero% divisor === 0){
        divisoresEncontrados[i] = divisor;
    }
}

if(divisoresEncontrados > 0){
    console.log("El numero es divisible entre :"+divisoresEncontrados);
} else {
    console.log("No es divisible entre ningun divisor");
}

/*
Otra forma que habia pensado sin CONST
//mirar si el numero es divisible entre 2
if (numero % 2 === 0){
    console.log("El numero es divisible entre 2")
} 

//mirar si el numero es divisible entre 3
if (numero % 3 === 0){
    console.log("El numero es divisible entre 3")
} 

//mirar si el numero es divisible entre 5
if (numero % 5 === 0){
    console.log("El numero es divisible entre 5")
} 

//mirar si el numero es divisible entre 10
if (numero % 10 === 0){
    console.log("El numero es divisible entre 10")
} */


