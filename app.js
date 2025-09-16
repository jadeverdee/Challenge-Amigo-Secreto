//Array amigos
let escribeAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;  //obtenemos el texto

    //Descarta caracteres especiales
    let soloEspaciosONumeros = /^[^a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;

    if (amigo.trim() === "" || soloEspaciosONumeros.test(amigo)) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Guardamos solo el texto
    escribeAmigos.push(amigo);

    //Pintamos la lista en el UL correcto
    mostrarAmigos();

    //Limpiamos el input
    limpiarTexto();
}

function limpiarTexto() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista antes de pintarla
    lista.innerHTML = "";

    // Recorrer array y crear <li> con el nombre
    for (let i = 0; i < escribeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = escribeAmigos[i]; //Aquí va el nombre
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * escribeAmigos.length);

    //Obtener el nombre sorteado
    let amigoSorteado = escribeAmigos[indiceAleatorio];

    //Elimina del array para que no se repita
    escribeAmigos.splice(indiceAleatorio, 1);

    //Actualiza la lista de amigos en la pantalla
    mostrarAmigos();

    //Mostrar el resultado en el <ul id="resultado">
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
    //Si ya no quedan amigos, inicia un juego nuevo
    if (escribeAmigos.length === 0) {
        setTimeout(() => {
            alert("🎉 El juego ha terminado. ¡Vamos a empezar de nuevo!");
            reiniciarJuego();
        }, 1000); // espera 1 segundo antes de reiniciar
    }
}

function reiniciarJuego() {
    // Vaciar el array
    escribeAmigos = [];

    // Limpiar lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}
