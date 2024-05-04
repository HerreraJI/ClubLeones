const form = document.getElementById("form");
const contraseña = document.getElementById("contraseña");
const caracter = document.getElementById("caracter");
const mayuscula = document.getElementById("mayuscula");
const numero = document.getElementById("numero");
const txtContraseña = document.getElementById("text-contraseña")
const nombreWarning = document.getElementById("nombreWarning")
const nombre = document.getElementById("nombre")
const cite  = document.querySelectorAll("form cite")
const input  = document.querySelectorAll("form input")


//VALIDACION CONTRASEÑA
contraseña.addEventListener("input", () => {
    //validacion de al menos un numero
    let isNum = false;
    if (contraseña.value.search(/\d/) != -1) {
        isNum = true;
    }
    numero.style.display = isNum ? "none" : "list-item";

    //validacion de al menos una MAYUSCULA
    let isMayus = false
    if (contraseña.value.search(/[A-Z]/) != -1) {
        isMayus = true;
    }
    mayuscula.style.display = isMayus ? "none" : "list-item";

    //validacion de al menos 8 caracteres
    caracter.style.display = (contraseña.value.length > 7) ? "none" : "list-item";
})



