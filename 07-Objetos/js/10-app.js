const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida:'1m'
}

console.log(producto);
console.log(medidas);

//Unir dos objetos con assign

const resultado = Object.assign(producto, medidas);

//Unir dos objetos co spread operator o Rest Operator

const resultado2 = { ...producto, ...medidas}

console.log(resultado);
console.log(resultado2);