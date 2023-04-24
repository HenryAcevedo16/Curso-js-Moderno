const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

//Keys para saber si un objeto esta vacio, me retorna las llaves o la parte isquierda del objeto 

console.log(Object.keys(producto));

//Values me retorna los valores(la parte derecha de un objeto)
console.log(Object.values(producto));

//Entries me retorna todos en pares
console.log(Object.entries(producto));