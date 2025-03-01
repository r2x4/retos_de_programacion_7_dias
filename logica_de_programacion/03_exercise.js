document.getElementById("iniciarPreguntas").addEventListener("click", function () {
    // Bienvenida al juego
    alert("¡Bienvenido Desarrollador!");

    // Paso 1: Elegir Front_End o Back_End
    let area = prompt("¿Quieres seguir hacia el área de Front_End o Back_End? (Escribe 'Front_End' o 'Back_End')").toLowerCase();

    // Valida entrada 
    while (area !== "front_end" && area !== "back_end") {
        area = prompt("Opción no válida. ¿Quieres seguir hacia el área de Front_End o Back_End? (Escribe 'Front_End' o 'Back_End')").toLowerCase();
    }

    if (area === "front_end") {
        // Paso 2: Si elige Front_End, elegir entre React o Vue
        let framework = prompt("¿Quieres aprender React o Vue? (Escribe 'React' o 'Vue')").toLowerCase();

        // Valida entrada
        while (framework !== "react" && framework !== "vue") {
            framework = prompt("Opción no válida. ¿Quieres aprender React o Vue? (Escribe 'React' o 'Vue')").toLowerCase();
        }

        if (framework === "react") {
            alert("¡React es una excelente elección! Es una biblioteca muy popular para construir interfaces de usuario.");
        } else if (framework === "vue") {
            alert("¡Vue es genial! Es un framework progresivo y fácil de aprender.");
        }
    } else if (area === "back_end") {
        // Paso 2: Si elige Back_End, elegir entre C# o Java
        let lenguaje = prompt("¿Quieres aprender C# o Java? (Escribe 'C#' o 'Java')").toLowerCase();

        // Valida entrada
        while (lenguaje !== "c#" && lenguaje !== "java") {
            lenguaje = prompt("Opción no válida. ¿Quieres aprender C# o Java? (Escribe 'C#' o 'Java')").toLowerCase();
        }

        if (lenguaje === "c#") {
            alert("¡C# es fantástico! Es ideal para desarrollar aplicaciones en el ecosistema de Microsoft.");
        } else if (lenguaje === "java") {
            alert("¡Java es muy poderoso! Es ampliamente utilizado en aplicaciones empresariales.");
        }
    }

    // Paso 3: Elegir entre especializarse o Fullstack
    let especializacion = prompt("¿Quieres especializarte en tu área o convertirte en Fullstack? (Escribe 'Especializarme' o 'Fullstack')").toLowerCase();

    // Valida entrada 
    while (especializacion !== "especializarme" && especializacion !== "fullstack") {
        especializacion = prompt("Opción no válida. ¿Quieres especializarte en tu área o convertirte en Fullstack? (Escribe 'Especializarme' o 'Fullstack')").toLowerCase();
    }

    if (especializacion === "especializarme") {
        alert("¡Especializarte es una gran idea! Te permitirá dominar tu área y destacar como experto.");
    } else if (especializacion === "fullstack") {
        alert("¡Convertirte en Fullstack es un camino desafiante pero muy gratificante! Podrás trabajar en ambas áreas.");
    }

    // Paso 4: Preguntar por tecnologías adicionales
    let continuar = true;
    while (continuar) {
        const tecnologia = prompt("¿Qué tecnología te gustaría aprender? (Escribe el nombre de la tecnología)");
        if (tecnologia) {
            alert(`¡${tecnologia} es una excelente tecnología! Seguro te será muy útil en tu carrera.`);
        }

        const otraTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde 'ok' para continuar o cualquier otra cosa para terminar)").toLowerCase();
        if (otraTecnologia !== "ok") {
            continuar = false;
        }
    }

    // Mensaje final
    alert("¡Gracias por jugar! Esperamos haber ayudado a aclarar tus objetivos en el desarrollo de software. ¡Buena suerte en tu futuro!");
});