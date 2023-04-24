const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring: Ademas de extraer el valor, crea la variable
const {nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);