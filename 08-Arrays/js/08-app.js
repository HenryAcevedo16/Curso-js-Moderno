const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring: Ademas de extraer el valor, crea la variable
const {nombre } = producto;

console.log(nombre);

//Destructuring con arreglos
// para extraer pones la variable y se obtiene el primer valor del arreglo
// si quieres extraer un valor del arreglo en especifico como el tercero tienes que poner por ejemplo
//cont numeros [10,20,30,40,50];
//const [, , tercero] = numeros;

const numeros = [10,20,30,40,50];

//const [primero, segundo] = numeros;

console.log(tercero)

//si solo quieres del tercero en adelnate

const [primero, ...tercero] = numeros;
