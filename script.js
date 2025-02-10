document.addEventListener("DOMContentLoaded", function() {
  const elements = {
    header: document.querySelector("header"),
    main: document.querySelector("main"),
    perdiste: document.querySelector("#perdiste"),
    melancolia: document.querySelector("#melancolia"),
    carga: document.querySelector("#pantalla-carga"),
    creditos: document.querySelector("#creditos"),
    paper: document.querySelector(".paper"),
    cover: document.querySelector(".cover"),
  };

  const buttons = {
    empezar: document.querySelector("#empezar"),
    creditos: document.querySelector("#btnCreditos"),
    reiniciarC: document.querySelector("#reiniciarc"),
    sacar: document.querySelector("#sacar"),
    quemar: document.querySelector("#quemar"),
    volver: document.querySelector("#volver"),
    melancolico: document.querySelector("#melancolico"),
    reiniciar: document.querySelector("#reiniciar"),
    reiniciarM: document.querySelector("#reiniciarm"),
    open: document.querySelector("#open"),
    close: document.querySelector("#close"),
  };

  // Ocultar todas las secciones excepto la de carga
  function ocultarTodo() {
    document.querySelectorAll(".pantalla").forEach(el => el.classList.remove("activa"));
  }

  ocultarTodo();
  elements.carga.classList.add("activa");

  // Manejo de sonidos
  const sonidos = {
    inicio: new Audio("./sonido/sonidoFondo0.mp3"),
    carta: new Audio("./sonido/sonidoFondo1.mp3"),
    youDied: new Audio("./sonido/youdied.mp3"),
    melancolia: new Audio("./sonido/sonidoFondo2.mp3"),
  };

  Object.values(sonidos).forEach(sonido => (sonido.volume = 0.2));
  sonidos.inicio.volume = 0.1;
  sonidos.carta.volume = 0.3;

  function detenerTodosLosSonidos() {
    Object.values(sonidos).forEach(sonido => {
      sonido.pause();
      sonido.currentTime = 0;
    });
  }

  function cambiarPantalla(seccion, sonido = null) {
    ocultarTodo();
    elements[seccion].classList.add("activa");
    detenerTodosLosSonidos();
    if (sonido) sonidos[sonido].play();
  }

  // Eventos de cambio de pantalla
  buttons.empezar.addEventListener("click", () => cambiarPantalla("header", "inicio"));
  buttons.creditos.addEventListener("click", () => cambiarPantalla("creditos"));
  buttons.reiniciarC.addEventListener("click", () => cambiarPantalla("carga"));
  buttons.sacar.addEventListener("click", () => cambiarPantalla("main", "carta"));
  buttons.quemar.addEventListener("click", () => cambiarPantalla("perdiste", "youDied"));
  buttons.melancolico.addEventListener("click", () => cambiarPantalla("melancolia", "melancolia"));
  buttons.reiniciar.addEventListener("click", () => cambiarPantalla("carga"));
  buttons.reiniciarM.addEventListener("click", () => cambiarPantalla("carga"));
  buttons.volver.addEventListener("click", () => cambiarPantalla("header", "inicio"));

// Asegúrate de ocultar todas las pantallas
const pantallas = document.querySelectorAll('.pantalla');
pantallas.forEach(pantalla => {
  pantalla.classList.remove('activa'); // Elimina la clase activa
});

// Luego, agrega la clase 'activa' a la pantalla que debe ser visible
const pantallaActiva = document.querySelector('#pantalla-que-debe-ser-visible'); // Cambia esto por la lógica correcta
pantallaActiva.classList.add('activa');

  // Manejo de la carta
  buttons.close.disabled = true;
  elements.paper.classList.add("close-paper");

  buttons.open.addEventListener("click", () => {
    buttons.open.disabled = true;
    buttons.close.disabled = false;
    elements.cover.classList.add("open-cover");
    setTimeout(() => {
      elements.cover.style.zIndex = -1;
      elements.paper.classList.replace("close-paper", "open-paper");
    }, 500);
  });

  buttons.close.addEventListener("click", () => {
    buttons.open.disabled = false;
    buttons.close.disabled = true;
    elements.paper.classList.replace("open-paper", "close-paper");
    setTimeout(() => {
      elements.cover.style.zIndex = 1;
      elements.cover.classList.remove("open-cover");
    }, 500);
  });

  // Actualización de fecha
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
});
