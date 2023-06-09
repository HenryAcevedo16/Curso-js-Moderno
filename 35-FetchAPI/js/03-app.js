const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados){
    const contenidp = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
        <p>Empleado: ${nombre}</p>
        <p>id: ${id}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
        `
    });

    contenidp.innerHTML = html;
}