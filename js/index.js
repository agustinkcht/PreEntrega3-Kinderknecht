// Planteo de plataforma para sacar tickets online.

// armamos class constructora para la base de datos de eventos.
class Evento {
  constructor(id, tipo, nombre, artista, fecha, hora, venue, precio, descripcion, disponibilidad) {
    this.id = id
    this.tipo = tipo
    this.nombre = nombre
    this.artista = artista
    this.fecha = fecha
    this.hora = hora
    this.venue = venue
    this.precio = parseFloat(precio)
    this.descripcion = descripcion
    this.disponibilidad = disponibilidad
  }
}

// array para pushearle cada instancia de eventos
const eventos = [] 

let selected // declaro variable para guardar la eleccion del evento 

// Instanciamos y pusheamos
eventos.push(
  new Evento(
    "CA",
    "Concierto",
    "Tripolar 360",
    "Usted Señalemelo",
    new Date (2023, 9, 25),
    "21:00hs",
    "El Luna Park",
    14000,
    "La vuelta tan esperada del power trío más amado de cuyo. Tras un lapso de respiro y autodescubrimiento personal, cada uno con sus proyectos, los integrantes encontraron en el reencuentro la capacidad de una expresión mayor. Bienvenidos los tres polos. Bienvenido tripolar."
  ),
  new Evento(
    "CB",
    "Concierto",
    "Las Luces que Estaban Ocultas",
    "Juana Aguirre",
    new Date (2023, 10, 16),
    "00:00hs",
    "Niceto Club",
    2000,
    "Luces y Cruces. Claroscuro es la palabra que usa Juana para nombrar su ultimo disco. Llega a Buenos Aires con su nuevo show, la presencia que entre luz y oscuridad genera el sonido de una nueva era."
  ),
  new Evento(
    "CC",
    "Concierto",
    "This Is Not a Drill",
    "Roger Waters",
    new Date (2023, 10, 21),
    "21:00hs",
    "River Plate",
    23500,
    "Tras un recorrido sin igual, marcando múltiples generaciones y desencadenando un efecto dominó en cuanto a la innovación en el rock, vuelve Roger Waters a la Argentina, esta vez en su gira de despedida."
  ),
  new Evento(
    "JA",
    "Jazz Club",
    "Forever Ella",
    "Barbie Martinez Sexteto",
    new Date (2023, 7, 22),
    "20:00hs",
    "Bebop Club",
    2600,
    "Un tributo a una de las voces más iconicas del siglo XX. Con su aproximación particular, viene Barbie Martinez con su quinteto a revivir sus mejores canciones."
  ),
  new Evento(
    "JB",
    "Jazz Club",
    "Donde El Mundo Ocurre",
    "Ernesto Jodos Quinteto",
    new Date (2023, 7, 26),
    "22:00hs",
    "Virasoro Bar",
    2000,
    "Años de experimentación -con una saga impresionante de lanzamientos abstractos- derivaron en este disco de pandemia, como lo describe Ernesto, en donde se fusiona la aleatoreidad de los eventos con el orden del arreglo."
  ),
  new Evento(
    "JC",
    "Jazz Club",
    "La Emperatriz",
    "Pía Hernandez Cuarteto",
    new Date (2023, 9, 14),
    "20:00hs",
    "Prezz Jazz",
    2500,
    "Tras una larga contemplación de su propia capacidad creativa, y la mezcla entre el flujo de la inocencia y la determinación, surgío esta obra que remarca los taninos de una epoca de confusion y caos, la emperatriz es la capaz de manejar ese caos."
  )
)

// guardo los eventos en el local.
const guardar = (evento) => localStorage.setItem(evento.id, JSON.stringify(evento))

const cardsCartelera = document.getElementById("cardsCartelera")
const masInfo = document.getElementById("masInfo")

// imprimo en html la data de los eventos en formato card.
const getCard = (evento) => {
  cardsCartelera.innerHTML += `
  <div class="card col-4">
    <div class="card-img">
      <img src="img/eventos/${evento.id}.jpeg" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${evento.nombre}</h5>
      <p class="card-text">${evento.artista}</p>
      <a href="#spacingBox" class="btn btn-primary" id="btn-${evento.id}">Seleccionar</a>
    </div>
  </div>
  `
}

// imprimo en html la info detallada del evento seleccionado.
const getMasInfo = (evento) => {
  selected = evento
  // selected está para ser usado con scope global... para cargar la verificacion del formulario

  masInfo.innerHTML = `
  <div class="col-6 eventDataL">
  <img src="img/eventos/${evento.id}.jpeg" class="img-thumbnail img-extended1" alt="${evento.nombre}">
  <div>
    <br>
  </div>
  </div>

  <div class="col-6 eventDataR">
    <h2> ${evento.artista} presenta <strong>${evento.nombre}</strong></h2>
    <span>${evento.descripcion}</span>

    <hr class="solid">

    <div class="importantData row container fluid">
      <span>Venue: ${evento.venue}</span>   
      <span>Fecha: ${evento.fecha.toLocaleDateString()}</span>
      <span>Hora: ${evento.hora}</span>
      <span>Precio: ${evento.precio}</span>

      <a class="btn btn-primary" id="btnComprar" href="#formAndCheckout">Comprar</a> 
    </div>
  </div>`

  // traigo el boton introducido en los backsticks y le doy evento.
  const btnComprar = document.getElementById("btnComprar")
  const formCheckout = document.getElementById("formAndCheckout")

  // al dar click en comprar, se muestra el formulario 
  btnComprar.addEventListener("click", () => {
    console.log(selected)
    formCheckout.classList.remove("hidden")
  })
}

// cargo los eventos en el local storage llamando a la funcion y los agrego a la lista de eventos
eventos.forEach((evento) => {
  guardar(evento)
  getCard(evento)
})

// seteo los eventos para ver mas info
eventos.forEach((evento) => {
  const btn = document.getElementById(`btn-${evento.id}`)
  btn.addEventListener('click', () => getMasInfo(evento))
})



// FORMULARIO Y CHECKOUT

const formulario = document.getElementById("formulario")
const checkout = document.getElementById("checkout")

formulario.addEventListener("submit", submitForm)

function submitForm(e) {
  e.preventDefault()
  let form = e.target
  let inputNombre = form.children[1].value
  let inputApellido = form.children[3].value
  let inputMail = form.children[5].value
  let inputPass = form.children[7].value

  let nombreCompleto = {
    nombre: inputNombre,
    apellido: inputApellido
  }
  let dataLogueo = {
    email: inputMail,
    password: inputPass
  }

  if ((inputNombre && inputApellido) === "") {
    alert("debes completar tus datos personales")
  } else if ((inputMail && inputPass) === "") {
    alert("debes completar tu mail y contraseña")
  } else {
    localStorage.setItem("Nombre Completo", JSON.stringify(nombreCompleto))
    localStorage.setItem("Data Logueo", JSON.stringify(dataLogueo))
    checkout.innerHTML = `
    <h2>Verificá para terminar con la compra</h2>
    <div class="concatenadoFinal">
    <span> ${nombreCompleto.nombre} ${nombreCompleto.apellido}, estás realizando la compra de una entrada para ${selected.nombre} de ${selected.artista} en vivo en ${selected.venue}. </span>
    <br>
    <span> El show es el día ${selected.fecha.toLocaleDateString()} a las ${selected.hora}. </span>
    <span> El precio final es de ${selected.precio}.</span>
    <span> Para confirmar, presiona ACEPTAR </span>
    <button type="button" class="btn btn-primary" id="btnAceptar">Aceptar</button>
    </div>`
  } 

  const btnAceptar = document.getElementById("btnAceptar")
  btnAceptar.addEventListener("click", () => {
    alert("Compra Realizada con Éxito. Muchas Gracias.")
  })
}