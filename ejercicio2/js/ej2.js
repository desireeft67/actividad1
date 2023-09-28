const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function creciente(n1, n2, n3, n4) {
    return n1<n2 && n2<n3 && n3<n4;
}

function pedirNumEntero(mensaje) {
    return new Promise((resolve) => {
        rl.question(mensaje, (respuesta) => {
            const num = parseInt(respuesta);
            
            if(Number.isInteger(num) && num>0) {
                resolve(num);
            } else {
                console.log('Error: el numero introducido no es correcto. Por favor, introduzca un numero entero positivo.')
                pedirNumEntero(mensaje).then(resolve);
            }
        });
    });
}

async function main() {
    console.log('Introduce 4 numeros enteros positivos.');
    
    const numeros=[];

    for(let i=0; i<=4; i++) {
        let num = await pedirNumEntero(`Numero ${i}: `);

        while (isNaN(num) || parseInt(num) <= 0) {
            console.log('Error: Debes introducir un número entero positivo.');
            num = await pedirNumEntero(`Número ${i}: `);
          }
      
          numeros.push(parseInt(num));

    }

    if(creciente(n1, n2, n3, n4)) {
        console.log('Los numeros estan ordenados crecientemente');
    } else {
        console.log('Los numeros no estan en orden creciente');
    }

    rl.close();
}

main();