//ver si el operador es valido
function validarOperador(operador) {
    return operador === '+' || operador === '-' || operador === '*' || operador === '/' || operador === 'FIN';
}

//ver si la division esta bien hecha
function divisionValida(dividendo, divisor) {
    return divisor !== 0;
}

function realizar(operando1, operando2, operacion) {
    switch(operacion){
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            if (!divisionValida(operando1, operando2)) {
                return "No se puede dividir por cero.";
            }
            return operando1 / operando2;
        default:
            return "Operación no válida.";
    }
}

while(true){
    const operando1 = prompt("Introduce el operando 1: ");
    const operando2 = prompt("Introduce el operando 2: ");
    var operacion;

    do {
        operacion = prompt ("Introduce la operacion que deseas realizar: ");
    } while (!validarOperador(operacion));

    if(operacion === 'FIN') {
        break;
    }

    const resultado = realizar(operando1, operando2, operacion);
    console.log("El resultado de la "+operacion+" es : "+resultado);

}
