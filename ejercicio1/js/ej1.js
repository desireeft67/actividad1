// es entero??
function esEntero(c) {
    return !isNaN(parseInt(c)) && Number.isInteger(parseFloat(c));
}
  
// es positivo??
function esPositivo(numero) {
    return numero > 0;
}

// calcular sumatorio
function sumatorio(numero) {
    var resultado = 0;
    for (var i = 0; i <= numero; i++) {
      resultado += i;
    }
    return resultado;
}
  
// pedir numero
function pedirEntero() {
    var numero;
  
    do {
        // pedir número Entero
        const entrada = prompt("Introduce un número entero positivo:");
      
        // convertir entrada a numero entero
        numero = parseInt(entrada);
  
        // es positivo??
        if (esEntero(entrada) && esPositivo(numero)) {
            console.log(`El número introducido es: ${numero}`);
            break;
        } else {
            console.error("Error: Debes introducir un número entero positivo válido.");
        }
    } while (true);
  
    // calcular el sumatorio e imprimirlo por pantalla
    const resultado = sumatorio(numero);
    console.log("El sumatorio del numerio "+numero+" es -> "+ resultado);
  }
  
  pedirEntero();