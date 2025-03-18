// Genera un número aleatorio entre 0 y 10

const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intentos = 3;
let acertado = false;

alert("¡Bienvenido al juego de adivinar el número!");

while (intentos > 0 && !acertado) {
    let intento = parseInt(prompt(`Tienes ${intentos} intentos. Ingresa un número entre 0 y 10:`));
    
    if (intento === numeroAdivinacion) {
        alert("¡Felicidades! Adivinaste el número.");
        acertado = true;
        break;

    } else {
        alert("Número incorrecto. Intenta de nuevo.");
        intentos--;
    }
}

if (!acertado) {
    alert(`Lo siento, se te acabaron los intentos. El número era ${numeroAdivinacion}.`);
}
