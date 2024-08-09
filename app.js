// interaccion entre el HTML y el javascript
//quitamos lo de abajo ya que lo asignamos como función (encapsulé)
//let parrafo = document.querySelector('p');
//parrafo.innerHTML =('Indica un número del 1 al 10');
// se hace para re utilizarlo n veces y como se trata de variables no se utilizan comillas
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
/* input: etiqueta en el HTML. Si tenemos más de un input vamos a hacer 
que cada uno tenga un idrntificador con un "id"
*/
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    /* 
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    */
    /* la comparación es si es true or false.
    el triple = es una validación para decir que tiene que 
    ser igual a valor y igual en tipo si no retorna a falso 
    console.log(numeroDeUsuario === numeroSecreto); (este se convierte en if y todos lo console.log de la fuction se quitan)
    */
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos=== 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El número no acerto 
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   /*let valorCaja = document.querySelector('#valorUsuario');
se simplificara 
   */
    document.querySelector('#valorUsuario').value = '';
}
/*acá recien retornaremos el numero secreto, no es obligatorio agregarlo pero es una buena practica
 retornar significa que cuando ejecutemos la función "genarar numero secreto"
  va a retornar un valor, estara devolviendo un entero aleatorio
    */
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p' , 'Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() { 
    asignarTextoElemento('h1' , 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // necesito limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalos de números
    // generar número aleatorio
    // iniciabilizar el número de intentos 
    condicionesIniciales();
    // deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();
