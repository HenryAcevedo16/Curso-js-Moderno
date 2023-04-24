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

// console.table(producto);

// //Como eliminar el ultimo elemento de un arreglo

// carrito.pop();

// //Eliminar del inicio del arreglo

// carrito.shift();

//Eliminar un dato de un lugar especifico en un arreglo

carrito.splice(3, 1);
console.table(carrito);
