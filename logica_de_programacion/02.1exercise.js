document.getElementById("iniciarPreguntas").addEventListener("click", function() {
    const nombre = prompt("¿Cuál es tu nombre?") || "desconocido";
    const edad = prompt("¿Cuántos años tienes?") || "desconocida";
    const lenguaje = prompt("¿Qué lenguaje de programación estudias?") || "un lenguaje desconocido";
    
    const mensaje = `Hola ${nombre}, tienes ${edad} años y estás estudiando ${lenguaje}!`;
    alert(mensaje);

    const gusta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 - SÍ o 2 - NO`);
    if (gusta == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (gusta == 2) {
        alert("Lo siento... ¿Has intentado aprender otros lenguajes?");
    } else {
        alert("Respuesta no válida. Por favor, intenta de nuevo.");
    }
});