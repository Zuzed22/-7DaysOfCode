function mostrarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;

    if (nombre && edad && lenguaje) {
        document.getElementById("mensaje").innerText = 
            `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    } 
    else {
        alert("Por favor, completa todas las preguntas.");
    }
}