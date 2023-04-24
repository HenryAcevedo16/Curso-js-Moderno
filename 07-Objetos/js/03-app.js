const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen ="Imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);