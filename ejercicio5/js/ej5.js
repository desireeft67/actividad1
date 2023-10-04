//Defino las constantes de logines y constraseñas
const LOGINES = ["usu1", "usu2", "usu3", "usu4", "usu5"];
const CONTRASEÑAS = ["passw1", "passw2", "passw3", "passw4", "passw5"];

//ver si el login y contraseña es valido
function verificarLogin(login, contraseña) {
    for (var i=0; i < LOGINES.length; i++){
        if(login === LOGINES[i] && contraseña === CONTRASEÑAS[i]) {
            return true;
        }
    } return false;
}

//para gestionar el acceso
function acceso() {
    //creo un limite de intentos 5
    var intentos = 5;

    //mientras que la i sea menor al numero de intentos sigo
    for(var i=0; i<intentos; i++) {
        //meter usuario y contraseña
        var login = prompt('Introduzca su nombre de usuario: ');
        var contraseña = prompt('Introduzca su contraseña: ');

        //si el usuario y contraseña son correctos entra, si no lo sigue intentando hasta que se queda sin intentos
        if(verificarLogin(login, contraseña)){
            console.log('El nombre y usuario son correctos');
            return;
        } else {
            intentos--;
            console.log('El usuario y/o la contraseña son incorrectos');

        }
    }
    //en el momento que se quede sin intentos sale del for y avisa
    console.log("Se ha excedido el número máximo de intentos");
}

//inicio la funcion de acceder
acceso();