localStorage.setItem('nombre', 1);

const prodcuto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300
};

const prodcutoString = JSON.stringify(prodcuto);
localStorage.setItem('producto', prodcutoString);

const meses = ['enero', 'feberero', 'marzo'];
localStorage.setItem('meses', JSON.stringify(meses) );