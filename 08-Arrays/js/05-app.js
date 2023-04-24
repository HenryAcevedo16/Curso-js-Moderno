// const meses = ['Enero', 'Feberero', 'Marzo'];

// //Agregar valor al final de en un arreglo

// meses.push('Abril');
// meses.push('Mayo');

const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 60
}

carrito.push(producto);
carrito.push(producto2);

//Para poner un valor al principio de un arreglo
carrito.unshift(producto3);

console.table(producto);