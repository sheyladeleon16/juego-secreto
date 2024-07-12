let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//let numeroSecreto = generaNumeroSecreto();
//let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return; 
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        } 
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo() {
    document.querySelector("#valorUsuario").value = "";
    //usar el queryselectory y signo de numero 
    //para llamar a funcion por id del input, si el getElementById
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento("p", "Ya utilizaste todos los valore posibles");
    } else { 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Elije un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCampo();
    //indicar mensaje de intervalo de números
    //generar nuevo numero secreto 
     //iniciar número de intentos
    condicionesIniciales();
    //desabilitar boton de nuevo juego
   document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
