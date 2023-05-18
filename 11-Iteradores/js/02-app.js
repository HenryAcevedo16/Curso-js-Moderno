// for (let i = 0; i <= 10; i++){
//     if(i ===5){
//         console.log('Cinco');
//         continue;
//     }
//     console.log(`Numero: ${i}`);
// }


const carrito =[
    {nombre:'Monitor 27 pulgadas', precio: 500},
    {nombre:'Television', precio: 100, Descuento: true},
    {nombre:'Tablet', precio: 200},
    {nombre:'Audifonos', precio: 300},
    {nombre:'Teclado', precio: 400},
    {nombre:'Celular', precio: 700},
]


for (let i =0; i < carrito.length; i++){
    if(carrito[i].Descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }   
    
    console.log(carrito[i].nombre);
}   