// Datos de productos
const productos = [
    "banana", "uva", "manzana", "tomate", "aguacate",
    "leche vegetal", "leche de vaca", "leche en polvo",
    "pescado", "carne de res", "pollo", "carne de cerdo",
    "dulces", "azucar", "gomitas"
];

// Variables de estado
let listaDeCompras = [];
let productoActualIndex = 0;

// Elementos del DOM
const iniciarCompraBtn = document.getElementById("iniciarCompra");
const productoCard = document.getElementById("productoCard");
const productoNombre = document.getElementById("productoNombre");
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const finalizarCompraBtn = document.getElementById("finalizarCompra");
const cuadroCompras = document.getElementById("cuadroCompras");
const listaCompras = document.getElementById("listaCompras");

// Función para mostrar el siguiente producto
function mostrarSiguienteProducto() {
    if (productoActualIndex < productos.length) {
        productoNombre.textContent = productos[productoActualIndex];
        productoCard.classList.remove("hidden");
    } else {
        // Si no hay más productos, ocultar la card y mostrar el botón de finalizar
        productoCard.classList.add("hidden");
        finalizarCompraBtn.classList.remove("hidden");
    }
}

// Función para manejar la respuesta del usuario (Sí o No)
function manejarRespuesta(respuesta) {
    if (respuesta === "si") {
        listaDeCompras.push(productos[productoActualIndex]);
    }
    productoActualIndex++;
    mostrarSiguienteProducto();
}

// Evento para iniciar la compra
iniciarCompraBtn.addEventListener("click", () => {
    // Reiniciar la lista y el índice
    listaDeCompras = [];
    productoActualIndex = 0;
    listaCompras.textContent = ""; 
    cuadroCompras.classList.add("hidden"); 
    finalizarCompraBtn.classList.add("hidden"); 

    // Mostrar el primer producto
    mostrarSiguienteProducto();
});

// Evento para el botón "Sí"
btnSi.addEventListener("click", () => {
    manejarRespuesta("si");
});

// Evento para el botón "No"
btnNo.addEventListener("click", () => {
    manejarRespuesta("no");
});

// Evento para finalizar la compra
finalizarCompraBtn.addEventListener("click", () => {
    // Mostrar la lista de compras en el cuadro
    listaCompras.textContent = listaDeCompras.join(", "); 
    cuadroCompras.classList.remove("hidden"); 
    finalizarCompraBtn.classList.add("hidden"); 
});