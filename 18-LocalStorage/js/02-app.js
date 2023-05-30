//Para obtener los item del local storage

const nombre = localStorage.getItem('producto');
console.log(nombre);

//Convertir de un string a un objeto o array

const productoJSOn = localStorage.getItem('producto');
console.log(JSON.parse(productoJSOn));

const meses = localStorage.getItem('meses');
const meseArray = JSON.parse(meses);
console.log(meseArray);