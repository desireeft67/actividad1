//creo el array de numeros para meter dentro
var numeros = [];

//para mirar que sea positivo
function esPositivo(numero){
     return !isNaN(numero) && numero >= 0 && numero % 1 == 0;

}

//voy a meter numeros meientras que haya menos de 4 en el array
for(var i = 0; i<4; i++){
    var numero;
    do {
        numero = prompt("Introduce un numero positivo: ");
        if(!esPositivo(numero)){
            console.error("Error: debes de introducir un numero entero positivo");
        }
    } 
    //mientras que el numero sea mayor que 0 y positivo
    while (!esPositivo(numero));

    numeros[i] = numero;
}

console.log("Los numeros introducidos son : " + numeros);