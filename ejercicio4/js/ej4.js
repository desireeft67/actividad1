//ver si el operador es valido
function validarOperador(operador) {
    return operador === '+' || operador === '-' || operador === '*' || operador === '/' || operador === 'FIN';
}

//ver si la division esta bien hecha
function divisionValida(dividendo, divisor) {
    //ver so el divisor es distinto de 0
    return divisor !== 0;
}
//la funcion realizar para cada operacion, no entiendo pq no funciona y lo concatena
function realizar(operando1, operando2, operacion) {
    switch(operacion){
        case '+':
            //suma
            return operando1 + operando2;
        case '-':
            //resta
            return operando1 - operando2;
        case '*':
            //multiplicacion
            return operando1 * operando2;
        case '/':
            //division
            if (!divisionValida(operando1, operando2)) {
                return "No se puede dividir por cero.";
            }
            return operando1 / operando2;
        default:
            return "Operación no válida.";
    }
}

while(true){
    //creo las constantes para que a lo largo de la operacion no varie
    const operando1 = prompt("Introduce el operando 1: ");
    const operando2 = prompt("Introduce el operando 2: ");
    var operacion;

    //que me deje meter numeros mientras que validar el operador salga mal
    do {
        operacion = prompt ("Introduce la operacion que deseas realizar: ");
    } while (!validarOperador(operacion));
    //para que al introducir FIN pare
    if(operacion === 'FIN') {
        break;
    }

    //para que me haga la funcion de realizar y me la meta en la variable resultado
    const resultado = realizar(operando1, operando2, operacion);
    console.log("El resultado de la "+operacion+" es : "+resultado);

}
