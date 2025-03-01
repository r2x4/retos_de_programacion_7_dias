document.getElementById("iniciarPreguntas").addEventListener("click", function() {
const nombre = prompt("¿Cuál es tu nombre?") || "desconocido";
const edad = prompt("¿Cuántos años tienes?") || "desconocida";
const lenguaje = prompt("¿Qué lenguaje de programación estudias?") || "un lenguaje desconocido";

const mensaje = `Hola ${nombre}, tienes ${edad} años estás estudiando ${lenguaje}!`;

alert(mensaje);

});