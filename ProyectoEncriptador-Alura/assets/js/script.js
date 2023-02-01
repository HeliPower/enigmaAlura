// Logica

// Scope es el ambito donde estas trabajando actualmente en el codigo

// Scope global SE USA VAR

// Variable global de encriptador
const letrasNoEncriptadas = ["e", "i", "a", "o", "u"];
const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

// Es la misma variable
// const matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//  El encriptador es una función que permite encriptar y desencriptar  un determinado texto dado
//  Los parametros que reciben es un mensaje, y luego la forma. Donde "1" es encriptar y "2" es desencriptar
//  Ejemplo: encriptador("hola", 1) retorna hoberlai.
//  Ejemplo: encriptador("hoberlai", 2) retorna hola. 
//letras y caracteres permitidos
function encriptador(mensaje, forma) {
    let patron = /[^a-z\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    if (mensaje.match(patron)) {
    alert("¡Solo letras minúsculas y sin acentos!");
    return;
    }

    if (forma == 1) {
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
           mensaje = mensaje.replaceAll(letrasNoEncriptadas[i], letrasEncriptadas[i]);
        }
    }
    else if (forma == 2) {
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            mensaje = mensaje.replaceAll(letrasEncriptadas[i], letrasNoEncriptadas[i]);
        }
    }
    return mensaje;
}

// DOM
const textoEntrada = document.querySelector("#textoEntrada");
const btnEncriptar = document.querySelector("#btnEncriptar");
const textoSalida = document.querySelector("#textoSalida");
const btnCopiar = document.querySelector("#btnCopiar")
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const seccion2 = document.querySelectorAll(".grid-item-2")
const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector('#muneco')


// Añadir btn de Encriptador para encriptar
btnEncriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 1);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);

// Añadir boton para copiar
btnCopiar.addEventListener("click",
    () => {
        mostrarBranding();
        textoEntrada.value = textoSalida.value; // Copiado automatico
        textoSalida.value = ""; // Se limpia el valor del texto
    }
);

// Añadir btn de Encriptador para desencriptar
btnDesencriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 2);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);

// Funciones DOM
function ocultarBranding() {
    titulo.classList.add("hide")
    parrafo.classList.add("hide")
    muneco.classList.add("hide")
    textoSalida.classList.remove("hide")
    btnCopiar.classList.remove("hide")
}

function mostrarBranding() {
    titulo.classList.remove("hide")
    parrafo.classList.remove("hide")
    muneco.classList.remove("hide")
    textoSalida.classList.add("hide")
    btnCopiar.classList.add("hide")
}