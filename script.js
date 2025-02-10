const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");
const perdisteElement = document.querySelector("#perdiste");
const melancoliaElement = document.querySelector("#melancolia");
const cargaElement = document.querySelector("#pantalla-carga");

const btnSacar = document.querySelector("#sacar");
const btnQuemar = document.querySelector("#quemar");
const btnVolver = document.querySelector("#volver");
const btnMelancolico = document.querySelector("#melancolico");
const btnOpenElement = document.querySelector("#open");
const btnCloseElement = document.querySelector("#close");
const btnReiniciar = document.querySelector("#reiniciar");
const btnReiniciarM = document.querySelector("#reiniciarm");
const btnEmpezar = document.querySelector("#empezar");
const paperElement = document.querySelector(".paper");
const coverElement = document.querySelector(".cover");

// Ocultar pantallas
mainElement.style.display = "none";
perdisteElement.style.display = "none";
melancoliaElement.style.display = "none";
headerElement.style.display = "none";

//boton empezar
btnEmpezar.addEventListener("click", () => {
  cargaElement.style.display = "none";
  headerElement.style.display = "flex";
});

// Mostrar el main y ocultar el header al presionar "Sacar la carta"
btnSacar.addEventListener("click", () => {
  headerElement.style.display = "none";
  mainElement.style.display = "flex"; // Se muestra el main
});

// La carta inicia cerrada
btnCloseElement.disabled = true;
paperElement.classList.add("close-paper");

// Evento para abrir la carta
btnOpenElement.addEventListener("click", () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  coverElement.classList.add("open-cover");

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.classList.remove("close-paper");
    paperElement.classList.add("open-paper");
  }, 500);
});

// Evento para cerrar la carta y animar el sobre
btnCloseElement.addEventListener("click", () => {
  btnOpenElement.disabled = false; // Permite volver a abrirla
  btnCloseElement.disabled = true; // Deshabilita el botón de cerrar

  // Cerrar el papel con animación
  paperElement.classList.remove("open-paper");
  paperElement.classList.add("close-paper");

  // Restaurar la tapa con animación
  setTimeout(() => {
    coverElement.style.zIndex = 1; // Trae la tapa al frente
    coverElement.classList.remove("open-cover"); // Cierra la tapa
  }, 500);
});

// Evento para volver al header SIN cerrar la carta
btnVolver.addEventListener("click", () => {
  mainElement.style.display = "none";
  headerElement.style.display = "flex";
});

// Evento para perder
btnQuemar.addEventListener("click", () => {
  headerElement.style.display = "none";
  perdisteElement.style.display = "flex";
});

// Evento para reiniciar
btnReiniciar.addEventListener("click", () => {
  perdisteElement.style.display = "none";
  cargaElement.style.display = "flex";
});

// Evento para ponerse melancolico
btnMelancolico.addEventListener("click", () => {
  mainElement.style.display = "none";
 melancoliaElement.style.display = "flex";
});

// Evento para reiniciar despues de la melancolia
btnReiniciarM.addEventListener("click", () => {
  melancoliaElement.style.display = "none";
  cargaElement.style.display = "flex";
});

//Sonido al abrir el main / carta
let fondoCarta = new Audio("./sonido/sonidoFondo1.mp3");

function reproducirSonidoC() {
    fondoCarta.play();
}

function detenerSonidoC() {
    fondoCarta.pause();
    fondoCarta.currentTime = 0;
}

btnSacar.addEventListener("click", reproducirSonidoC);
btnVolver.addEventListener("click", detenerSonidoC);
btnMelancolico.addEventListener("click", detenerSonidoC);

//Sonido al esar en el inicio
let fondoInicio = new Audio("./sonido/sonidoFondo0.mp3");

function reproducirSonidoI() {
    fondoInicio.play();
}

function detenerSonidoI() {
    fondoInicio.pause();
    fondoInicio.currentTime = 0;
}

btnVolver.addEventListener("click", reproducirSonidoI);
btnEmpezar.addEventListener("click", reproducirSonidoI);
btnSacar.addEventListener("click", detenerSonidoI);
btnQuemar.addEventListener("click", detenerSonidoI);

//Sonido en perdiste
let sonidoYouDied = new Audio("./sonido/youdied.mp3");

function reproducirSonidoYD() {
  sonidoYouDied.play();
}

function detenerSonidoYD() {
  sonidoYouDied.pause();
  sonidoYouDied.currentTime = 0;
}

btnQuemar.addEventListener("click", reproducirSonidoYD);
btnReiniciar.addEventListener("click", detenerSonidoYD);

//Sonido melancolia
let fondoMelancolia = new Audio("./sonido/sonidoFondo2.mp3");

function reproducirSonidoM() {
  fondoMelancolia.play();
}

function detenerSonidoM() {
  fondoMelancolia.pause();
  fondoMelancolia.currentTime = 0;
}

btnMelancolico.addEventListener("click", reproducirSonidoM);
btnReiniciarM.addEventListener("click", detenerSonidoM);

fondoInicio.volume = 0.1;
fondoCarta.volume = 0.3;
sonidoYouDied.volume = 0.2;
fondoMelancolia.volume = 0.2;

//en github
function actualizarFecha() {
            const ahora = new Date();
            const opciones = { 
                weekday: 'long', year: 'numeric', month: 'long', 
                day: 'numeric', hour: '2-digit', minute: '2-digit' 
            };
            document.getElementById("fecha").textContent = ahora.toLocaleDateString('es-ES', opciones);
        }

        setInterval(actualizarFecha, 1000); // Actualiza cada segundo
        actualizarFecha(); // Llamada inicial
