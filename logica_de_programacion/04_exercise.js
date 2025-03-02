// Variables globales para el estado del juego
let numeroSecreto;
let intentos;
let maximosIntentos = 3;

// Función para iniciar el juego
function iniciarJuego() {
    // Configuración del juego
    let numeroMaximo = 10;
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    intentos = 1;

    // Mostrar el juego
    document.getElementById("juego").style.display = "flex";
    document.getElementById("mensaje").textContent = `Adivina un número entre 1 y ${numeroMaximo}. Tienes ${maximosIntentos} intentos.`;

    // Borrar el campo de entrada
    document.getElementById("numeroUsuario").value = "";

    // Ocultar retroalimentación al inicio
    document.getElementById("retroalimentacion").style.display = "none";
    // Habilitar el campo de entrada y el botón de verificar
    document.getElementById("numeroUsuario").disabled = false;
    document.getElementById("verificarNumero").disabled = false;
}

// Función para verificar el número ingresado
function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    let retroalimentacion = document.getElementById("retroalimentacion");

    if (numeroUsuario === numeroSecreto) {
        retroalimentacion.textContent = `¡Acertaste! El número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`;
        retroalimentacion.style.display = "block";
        // Deshabilitar el campo de entrada y el botón de verificar
        document.getElementById("numeroUsuario").disabled = true;
        document.getElementById("verificarNumero").disabled = true;
        // Habilitar el botón "Iniciar Juego"
        document.getElementById("iniciarPreguntas").disabled = false;
    } else {
        if (numeroUsuario > numeroSecreto) {
            retroalimentacion.textContent = "El número secreto es menor.";
        } else {
            retroalimentacion.textContent = "El número secreto es mayor.";
        }
        // Mostrar retroalimentación
        retroalimentacion.style.display = "block";
        // Borrar el campo de entrada
        document.getElementById("numeroUsuario").value = "";
        intentos++;
        if (intentos > maximosIntentos) {
            retroalimentacion.textContent = `Número máximo de ${maximosIntentos} intentos alcanzado. El número secreto era ${numeroSecreto}.`;
            retroalimentacion.style.display = "block";
            // Deshabilitar el campo de entrada y el botón de verificar
            document.getElementById("numeroUsuario").disabled = true;
            document.getElementById("verificarNumero").disabled = true;
            // Habilitar el botón "Iniciar Juego"
            document.getElementById("iniciarPreguntas").disabled = false;
        }
    }
}

// Evento para iniciar el juego
document.getElementById("iniciarPreguntas").addEventListener("click", iniciarJuego);

// Evento para verificar el número (solo se agrega una vez)
document.getElementById("verificarNumero").addEventListener("click", verificarNumero);

// Inicialmente, deshabilitar el botón "Iniciar Juego" si es necesario
document.getElementById("iniciarPreguntas").disabled = false;