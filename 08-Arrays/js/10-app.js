const carrito =[
    {nombre:'Monitor 27 pulgadas', precio: 500},
    {nombre:'Television', precio: 100},
    {nombre:'Tablet', precio: 200},
    {nombre:'Audifonos', precio: 300},
    {nombre:'Teclado', precio: 400},
    {nombre:'Celular', precio: 700},
]


//Map hace un nuevo arreglo y forEach no

const nuevoArreglo = carrito.forEach( function (producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})


const nuevoArreglo2 = carrito.map( function (producto){
   return `${producto.nombre} - Precio: ${producto.precio}`;
})

