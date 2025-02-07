const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");
const perdisteElement = document.querySelector("#perdiste");
const melancoliaElement = document.querySelector("#melancolia");

const btnSacar = document.querySelector("#sacar");
const btnQuemar = document.querySelector("#quemar");
const btnVolver = document.querySelector("#volver");
const btnMelancolico = document.querySelector("#melancolico");
const btnOpenElement = document.querySelector("#open");
const btnCloseElement = document.querySelector("#close");
const btnReiniciar = document.querySelector("#reiniciar");
const btnReiniciarM = document.querySelector("#reiniciarm");
const paperElement = document.querySelector(".paper");
const coverElement = document.querySelector(".cover");

// Ocultar el main al inicio
mainElement.style.display = "none";
perdisteElement.style.display = "none";
melancoliaElement.style.display = "none";

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
  melancoliaElement.style.display = "none";
  headerElement.style.display = "flex";
});

// Evento para ponerse melancolico
btnMelancolico.addEventListener("click", () => {
  mainElement.style.display = "none";
 melancoliaElement.style.display = "flex";
});

// Evento para reiniciar despues de la melancolia
btnReiniciarM.addEventListener("click", () => {
  melancoliaElement.style.display = "none";
  headerElement.style.display = "flex";
});

// Evento para reiniciar
btnReiniciar.addEventListener("click", () => {
  sectionElement.style.display = "none";
  headerElement.style.display = "flex";
});
