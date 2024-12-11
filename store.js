
const botones = document.getElementsByTagName("botton")
const contenido = document.getElementById("contenido")
const imagenes = document.getElementById("imagenes-svg")

let path = ""

Array.from(botones).forEach(element => {
    
    element.addEventListener("click", () => {
        // element.disabled = "true"
        // console.log(element.disabled)
        imagenes.style.display = "none"

        contenido.innerHTML = '<div class="row p-5 d-flex justify-content-center"><div class="col-12 d-flex p-5 justify-content-center"><span id="loader"></span></div></div>';
        console.log(element.id)
        switch (element.id) {
            case "mujer":
                path = "women\'s clothing"
                break;
            case "hombre":
                path = "men\'s clothing"
                break;
            case "electronica":
                path = "electronics"
                break;
            case "otros":
                path = "jewelery"
                break;
        }        

        fetch(`https://fakestoreapi.com/products/category/${path}`)
            .then(res => res.json())
            .then(json => {

                contenido.innerHTML =''
                json.forEach(element => {

                    const col = document.createElement("div")
                    col.classList = "col"

                    const card = document.createElement("div")
                    card.classList = "card"
                    card.style = "width: 18rem;" ///////////////////////


                    const imagen = document.createElement("img")
                    imagen.classList = "card-img-top"
                    imagen.src = `${element.image}`
                    imagen.alt = `${element.title}`
                    imagen.style = "padding: 1rem; height: 18rem;object-fit: contain;" //////////////////////               

                    const cardBody = document.createElement("div")
                    cardBody.classList = "card-body"

                    const cardtitle = document.createElement("h5")
                    cardtitle.classList = "card-title"
                    cardtitle.textContent = `${element.title}`
                    cardtitle.style = "display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden; text-overflow: ellipsis;"

                    const cardDescription = document.createElement("p")
                    cardDescription.classList = "card-text"
                    cardDescription.style = "display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden; text-overflow: ellipsis;"
                    cardDescription.textContent = `${element.description}`


                    const boton = document.createElement("a")
                    boton.classList = "btn btn-primary"
                    boton.textContent = "Comprar"

                    cardBody.append(cardtitle)
                    cardBody.append(cardDescription)
                    cardBody.append(boton)
                    card.append(imagen)
                    card.append(cardBody)
                    col.append(card)
                    contenido.append(col)
                });
            })
    })
})







