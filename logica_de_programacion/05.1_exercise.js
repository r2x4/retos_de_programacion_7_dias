document.getElementById("iniciaCompras").addEventListener("click", function() {

const listaDeCompras = [];
const frutas = ["banana", "uva", "manzana", "tomate", "aguacate"];
const lacteos = ["leche vegetal", "leche de vaca", "leche en polvo"];
const congelados = ["pescado", "carne de res", "pollo", "carne de cerdo"];
const dulces = ["dulces", "azucar", "gomitas"];

function preguntarSiLlevar(producto){
    const respuesta = prompt(`¿Llevas ${producto}? (si/no)`).toLowerCase();
    return respuesta === "si";
}

frutas.forEach(fruta =>{
    if (preguntarSiLlevar(fruta)) {
        listaDeCompras.push(fruta)
    }
});

lacteos.forEach(lacteo =>{
    if (preguntarSiLlevar(lacteo)){
        listaDeCompras.push(lacteo)
    }
});

congelados.forEach(carnes =>{
    if (preguntarSiLlevar(carnes)){
        listaDeCompras.push(carnes)
    }
});

dulces.forEach(dulce =>{
    if (preguntarSiLlevar(dulce)){
        listaDeCompras.push(dulce)
    }
});

console.log("Lista de Compras: ", listaDeCompras);

});