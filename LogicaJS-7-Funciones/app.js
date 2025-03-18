function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: División por cero";
    }
}

function main() {
    while (true) {
        console.log("\nCalculadora - Elige una opción:");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        console.log("5. Salir");
        
        let opcion = prompt("Ingresa el número de la operación: ");
        
        if (opcion === '5') {
            alert("Hasta la próxima");
            break;
        }
        
        if (['1', '2', '3', '4'].includes(opcion)) {
            let num1 = parseFloat(prompt("Ingresa el primer número: "));
            let num2 = parseFloat(prompt("Ingresa el segundo número: "));
            
            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Ingresa solo números válidos.");
                continue;
            }
            
            const operaciones = {
                '1': suma,
                '2': resta,
                '3': multiplicacion,
                '4': division
            };
            
            let resultado = operaciones[opcion](num1, num2);
            alert(`Resultado: ${resultado}`);
        } else {
            alert("Opción no válida, intenta de nuevo.");
        }
    }
}

main();
