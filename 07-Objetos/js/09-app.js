"use strict";

const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

Object.seal( producto );

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));

//Diferencia entre Seal y freeze: Freeze no te deja hacer nada el objeto se queda tal cual como esta y seal te permite modificar las llaves existentes

