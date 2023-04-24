const producto = 'Monitor 20 Pulgadas';

//.repeat te va a permitir repetir una cadena de texto y lo redondea

const texto = ' en Promocion'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split para dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"));