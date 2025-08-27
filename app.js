let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    let valorNombre = nombre.value.trim();
    if (valorNombre.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    amigos.push(valorNombre);
    mostrarListaAmigos();
    limpiarCampo();
}

function limpiarCampo() {
    valorNombre = document.getElementById("amigo").value = '';
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.append(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.")
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

function reiniciarJuego() {
    amigos = []; 
    
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = "Juego reiniciado, ingrese nuevos nombres";
    document.getElementById("amigo").value = '';
}