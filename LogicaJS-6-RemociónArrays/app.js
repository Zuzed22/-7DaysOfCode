let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";  // valor inicial
while (agregarMas !== "no") {
    if (frutas.length > 0 || lacteos.length > 0 || dulces.length > 0 || congelados.length > 0) {
        agregarMas = prompt("¿Deseas 'añadir' un alimento o 'eliminar' uno de la lista? Responde 'añadir', 'eliminar' o 'no'.");
        while (agregarMas !== "añadir" && agregarMas !== "eliminar" && agregarMas !== "no") {
            alert("¡Operación no reconocida!");
            agregarMas = prompt("¿Deseas 'añadir' un alimento o 'eliminar' uno de la lista? Responde 'añadir', 'eliminar' o 'no'.");
        }
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
        while (agregarMas !== "sí" && agregarMas !== "no") {
            alert("¡Operación no reconocida!");
            agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
        }
        if (agregarMas === "sí") agregarMas = "añadir";
    }
    
    if (agregarMas === "no") {
        break;
    }
    
    if (agregarMas === "añadir") {
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
        if (categoria === 'frutas') {
            frutas.push(comida);
        } else if (categoria === 'lacteos') {
            lacteos.push(comida);
        } else if (categoria === 'dulces') {
            dulces.push(comida);
        } else if (categoria === 'congelados') {
            congelados.push(comida);
        } else {
            alert("Esa categoría no está predefinida.");
        }
    }
    
    if (agregarMas === "eliminar") {
        let listaCompleta = `Lista de compras:\n  Frutas: ${frutas.join(", ")}\n  Lácteos: ${lacteos.join(", ")}\n  Dulces: ${dulces.join(", ")}\n  Congelados: ${congelados.join(", ")}`;
        alert(listaCompleta);
        let itemEliminar = prompt("¿Qué alimento deseas eliminar?");
        
        let eliminarDeCategoria = (categoria) => {
            let index = categoria.indexOf(itemEliminar);
            if (index !== -1) {
                categoria.splice(index, 1);
                return true;
            }
            return false;
        };
        
        if (!eliminarDeCategoria(frutas) &&
            !eliminarDeCategoria(lacteos) &&
            !eliminarDeCategoria(dulces) &&
            !eliminarDeCategoria(congelados)) {
            alert("¡No fue posible encontrar el elemento en la lista!");
        } else {
            alert(`El alimento '${itemEliminar}' ha sido eliminado de la lista.`);
        }
    }
}

alert(`Lista final de compras:\n  Frutas: ${frutas.join(", ")}\n  Lácteos: ${lacteos.join(", ")}\n  Dulces: ${dulces.join(", ")}\n  Congelados: ${congelados.join(", ")}`);
