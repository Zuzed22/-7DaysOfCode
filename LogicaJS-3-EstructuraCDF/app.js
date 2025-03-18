document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    let message = document.getElementById("message");
    let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?");

    if (area && area.toLowerCase() === "front-end") {
        let frontTech = prompt("¿Quieres aprender React o Vue?");
        message.innerText = `Genial, aprenderás ${frontTech}!`;
    } else if (area && area.toLowerCase() === "back-end") {
        let backTech = prompt("¿Quieres aprender C# o Java?");
        message.innerText = `Perfecto, aprenderás ${backTech}!`;
    } else {
        message.innerText = "Opción no válida. Recarga la página y elige de nuevo.";
        return;
    }

    let fullstackChoice = prompt("¿Quieres especializarte en tu área elegida o convertirte en Fullstack? (Especializarse / Fullstack)");
    if (fullstackChoice && fullstackChoice.toLowerCase() === "especializarse") {
        message.innerText += "\n¡Muy bien! Seguirás profundizando en tu área elegida.";
    } else if (fullstackChoice && fullstackChoice.toLowerCase() === "fullstack") {
        message.innerText += "\n¡Excelente elección! Aprenderás tanto Front-End como Back-End.";
    } else {
        message.innerText += "\nOpción no válida. Recarga la página y elige de nuevo.";
        return;
    }

    let moreTech;
    do {
        moreTech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe el nombre o 'no' para salir)");
        if (moreTech && moreTech.toLowerCase() !== "no") {
            message.innerText += `\n¡Interesante elección! ${moreTech} es una tecnología muy útil.`;
        }
    } while (moreTech && moreTech.toLowerCase() !== "no");

    message.innerText += "\n¡Gracias por participar en esta aventura de aprendizaje!";
}

