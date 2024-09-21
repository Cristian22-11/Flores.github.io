// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En tus silencios encuentro calma", time: 15 },
  { text: "y en tus palabras la verdad", time: 19 },
  { text: "No siempre lo dices en voz alta", time: 23 },
  { text: "pero sé que estás ahí, sin más", time: 27 },
  { text: "A veces somos como dos faros", time: 31 },
  { text: "que brillan aunque no se ven", time: 35 },
  { text: "pero en el fondo, siempre cerca", time: 39 },
  { text: "y me basta saber que también", time: 43 },
  { text: "lo que me das no se compara", time: 50 },
  { text: "con lo que el mundo pueda dar", time: 51 },
  { text: "Solo con verte a la distancia", time: 55 },
  { text: "ya siento el mundo descansar", time: 59 },
  { text: "No hace falta que seas diferente", time: 63 },
  { text: "ni que cambies tu forma de ser", time: 67 },
  { text: "Te aprecio en cada paso, presente", time: 71 },
  { text: "En los días claros y al caer", time: 75 },
  { text: "como el sol en tardes tranquilas", time: 79 },
  { text: "te llevo en mi mente, siempre", time: 83 },
  { text: "Y aunque no estemos siempre juntos", time: 91 },
  { text: "tu esencia nunca se va", time: 95 },
  { text: "Entre las risas o el silencio", time: 99 },
  { text: "sé que siempre volverás", time: 103 },
  { text: "porque lo que compartimos", time: 107 },
  { text: "es más fuerte de lo que parece", time: 111 },
  { text: "y en este vaivén de la vida", time: 115 },
  { text: "siempre sé que estarás", time: 119 },
  { text: "No importa lo que pase fuera", time: 123 },
  { text: "ni las vueltas que dé el mundo", time: 127 },
  { text: "lo que tú me das, es paz", time: 131 },
  { text: "y me basta saber que, en el fondo", time: 135 },
  { text: "siempre hay un lugar seguro", time: 139 },
  { text: "en ti, y en cada uno de tus gestos", time: 143 },
  { text: "Al final, somos dos luces", time: 147 },
  { text: "que nunca dejarán de brillar", time: 151 },
  { text: "gracias a lo que eres, a tu forma", time: 155 },
  { text: "de estar, sin cambiar", time: 159 },
  { text: "y eso es todo lo que necesito", time: 163 },
  { text: "en esta vida, para continuar", time: 167 },
  { text: "y sé que en cada rincón, en cada paso", time: 171 },
  { text: "tu luz me acompañará", time: 175 },
  { text: "con la fuerza que solo tú das", time: 179 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);