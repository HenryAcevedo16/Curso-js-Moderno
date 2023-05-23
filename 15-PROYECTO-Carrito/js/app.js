// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners () {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}



//Funciones
function agregarCurso(e){
    e.preventDefault();



    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
       leerDatosCurso(cursoSeleccionado);
    }
}


//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);


    //Crear un objecto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //Agrega elementos al carrito

    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
    
}


//Muestra el carrito de compras en el html
function carritoHTML(){


//Limpiar el html
limpiarHTML();

//Recorre el carrito y genera el html
    articulosCarrito.forEach(curso =>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
         `;

        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);       
    });
}


//Elimina loa cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}