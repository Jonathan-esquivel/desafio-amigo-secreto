// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres
let nombres = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Obtener el valor del input
    let inputNombre = document.getElementById("amigo").value;

    // Verificar si el nombre está vacío
    if (inputNombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Verificar si el nombre ya existe
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === inputNombre) {
            alert("Este nombre ya fue agregado.");
            return;
        }
    }

    // Verificar si el nombre tiene solo letras y espacios
    let tieneSoloLetras = true;
    for (let i = 0; i < inputNombre.length; i++) {
        if (!/[a-zA-ZÀ-ÿ\s]/.test(inputNombre[i])) {
            tieneSoloLetras = false;
            break;
        }
    }
    if (!tieneSoloLetras) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    // Agregar el nombre al array
    nombres.push(inputNombre);

    // Actualizar la lista en la página
    actualizarLista();

    // Limpiar el input
    document.getElementById("amigo").value = "";
}

// Función para actualizar la lista en la página
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si hay nombres en la lista
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Generar un número aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>El amigo secreto es: <strong>" + nombres[indiceAleatorio] + "</strong></li>";
}