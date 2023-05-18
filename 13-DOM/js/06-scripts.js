const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);//Si en el css -visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);//si lo va a encontrar
console.log(encabezado.innerHTML);//se trae el html

// const nuevoheading = 'Nuevo Heading'
// document.querySelector ('.contenido-hero h1').textContent = nuevoheading;