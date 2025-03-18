let listaCompras = {
    Frutas: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

function agregarItem() {
    let alimento = prompt("¿Qué alimento deseas agregar?");
    if (!alimento) return;
    
    let categoria = prompt("¿En qué categoría se encaja? (Frutas, Lácteos, Congelados, Dulces, Otros)").trim();
    if (!listaCompras[categoria]) {
        categoria = "Otros";
    }
    listaCompras[categoria].push(alimento);
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            let li = document.createElement("li");
            li.textContent = `${categoria}: ${listaCompras[categoria].join(", ")}`;
            lista.appendChild(li);
        }
    }
}
