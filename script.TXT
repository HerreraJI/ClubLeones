const form = document.getElementById("form");
const contraseña = document.getElementById("contraseña");
const caracter = document.getElementById("caracter");
const mayuscula = document.getElementById("mayuscula");
const numero = document.getElementById("numero");
const nombre = document.getElementById("nombre")
const cite = document.querySelectorAll("form cite")
const input = document.querySelectorAll("form input")
const submit = document.getElementById("submit")
const iconoPass = document.getElementById("iconoPass");
const iconoMostrar = document.getElementById("mostrar");
const iconoOcultar = document.getElementById("ocultar");

let okContraseña = false
let error = false


form.addEventListener("submit", (e) => {    

    input.forEach((ele, ind) => {
        cite[ind].style.display = (!ele.value) ? "block" : "none";
    })
    cite.forEach((elem) => {
        if (elem.style.display == "block") {
            error = true
        }
    })

    if (!okContraseña || error) {
        e.preventDefault()
        alert("Debe completar CORRECTAMENTE todos los campos obligatorios")
    } else {
        alert("Inscripcion exitosa!")

    }
})

//VALIDACION CONTRASEÑA
contraseña.addEventListener("input", () => {
    //validacion de al menos un numero
    let isNum = false;
    if (contraseña.value.search(/\d/) != -1) {
        isNum = true;
    }
    numero.style.color = isNum ? "green" : "red";

    //validacion de al menos una MAYUSCULA
    let isMayus = false
    if (contraseña.value.search(/[A-Z]/) != -1) {
        isMayus = true;
    }
    mayuscula.style.color = isMayus ? "green" : "red";

    //validacion de al menos 8 caracteres
    caracter.style.color = (contraseña.value.length > 7) ? "green" : "red";


    if (isNum && isMayus && contraseña.value.length > 7) {
        okContraseña = true;
    }
})

//validar mail
function validarEmail() {

    let email= document.getElementById('emailInput');

    //expresion regular para mail .
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // se verifica si el valor de "mail" pasa el patrón
    if (!validEmail.test(email.value)) {
        //si no lo pasa aparece modal se crea un error y se elimina el valo del campo email        
        alert('Por favor ingrese un mail valido: Example@gmail.com');
        error = true
        email.value = ''
    }else{
        //si lo pasa se elimina el error
        error = false
    }
}

//mostrar/ocultar contraseña
iconoPass.addEventListener("click", () => {
    if (contraseña.type == "password") {
        contraseña.type = "text";
        iconoMostrar.style.display = "none"
        iconoOcultar.style.display = "block"

    } else {
        contraseña.type = "password";
        iconoMostrar.style.display = "block"
        iconoOcultar.style.display = "none"
    }
})

//validacion del DNI
function validarDNI() {

    let dni = document.getElementById('dni');
    // Expresión regular para validar que el DNI tenga 7 u 8 dígitos
    const regex = /^\d{7,8}$/;
    // Probar la cadena contra la expresión regular 
    if (!regex.test(dni.value)) {
        alert("El DNI debe tener 7 o 8 dígitos");
        error = true
        dni.value =''
    }else{
        error = false
    }
}

