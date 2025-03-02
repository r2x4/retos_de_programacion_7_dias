document.getElementById("iniciarPreguntas").addEventListener("click", function () {
    // Configuración del juego
    let numeroMaximo = 10;
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    let intentos = 1;
    let maximosIntentos = 3;

    // Mostrar el juego
    document.getElementById("juego").style.display = "flex";
    document.getElementById("mensaje").textContent = `Adivina un número entre 1 y ${numeroMaximo}. Tienes ${maximosIntentos} intentos.`;

    // Ocultar retroalimentación al inicio
    document.getElementById("retroalimentacion").style.display = "none";

    // Verificar el número ingresado
    document.getElementById("verificarNumero").addEventListener("click", function () {
        let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
        let retroalimentacion = document.getElementById("retroalimentacion");

        if (numeroUsuario === numeroSecreto) {
            alert(`¡Acertaste! El número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
            reiniciarJuego();
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
                alert(`Número máximo de ${maximosIntentos} intentos alcanzado. El número secreto era ${numeroSecreto}.`);
                reiniciarJuego();
            }
        }
    });

    // Función para reiniciar el juego
    function reiniciarJuego() {
        document.getElementById("juego").style.display = "none";
        document.getElementById("numeroUsuario").value = "";
        document.getElementById("mensaje").textContent = "";
        document.getElementById("retroalimentacion").style.display = "none";
    }
});