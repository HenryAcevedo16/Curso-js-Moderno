const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

//Los objetos se pueden reescribir

producto.disponible = false;
delete producto.precio;

console.log(producto);