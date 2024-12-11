const modal = document.getElementById("mimodal");
const img = document.querySelectorAll(".imgDeporte> img");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const nav = document.getElementById("navFotos");

let seccion = '';
let validImg = [];
let element = null;

//A cada img se le asigna un EventListener
img.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        
        seccion = ele.src.substring(26, 29) //se obtiene un string con la seccion de la img
        modal.style.display = "block";      //se muestra el modal
        modalImg.src = ele.src;             //como 1° imagen se muestra la q se clickeo          
        captionText.innerHTML = ele.alt;    //como texto se muestra el alt q tiene la img  
        nav.style.display = "none"          //se oculta el nav
        validImg = imgxSeccion(seccion)     //se obtienen todas las imgs de la seccion
        num = validImg.indexOf(ele);    //se obtiene el indice en el array de la img q se clickeo

    })
})

/**
 * Dado un string "seccion" que representa una seccion de fotos en la galeria,
 * devuelve un array con todas las imagenes de esa seccion.
 * @param {String} seccion - string que representa una seccion en la galeria
 * @returns {Array} array con las imagenes que pertenecen a la seccion
 */
function imgxSeccion(seccion) {
    validImg = []
    img.forEach((ele) => {
        if (ele.src.includes(seccion)) {
            validImg.push(ele)
        }

    })
    return validImg
}

const flechaDerecha = document.getElementById("derecha")

flechaDerecha.addEventListener("click", () => {
    num += 1                                    //se aumenta el indice
    if (num > 3)                                //como max hay 4 imgs por seccion
        num = 0                                 //si es mayor a 3 se vuelve a 0
    modalImg.src = validImg[num].src            //se cambia la imagen con cada click
    captionText.innerHTML = validImg[num].alt   //se cambia el texto
})

const izquierda = document.getElementById("izquierda")
//idem a derecha pero con la flecha izquierda
izquierda.addEventListener("click", () => {
    num -= 1
    if (num < 0)
        num = 3
    modalImg.src = validImg[num].src
    captionText.innerHTML = validImg[num].alt
})

const span = document.getElementById("close");
//se agrega un EventListener para cerrar el modal
span.addEventListener("click", () => {
    modal.style.display = "none";    //se oculta el modal
    nav.style.display = "flex"      //se vuelve a mostrar el nav
})

