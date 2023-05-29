//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();//coge el año actual
const min = max -10;

//Generar un objeto con la busquedaq
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
mostrarAutos(autos); //Muestras los autos al cargar

//Llena las opciones de años
llenarSelect();


})

//Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);   
    filtarAuto();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtarAuto();
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtarAuto();
})

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value
    filtarAuto();
})

//funciones
function mostrarAutos (autos) {
    limpiarHTML();
    autos.forEach(auto=> {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');
        
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} -
        color: ${color}
        
        `;

        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}


//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//Genera los años del select 
function llenarSelect (){

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones del año al select
    
    }
}

//Funcion que filtra en base a la busqueda

function filtarAuto (){
    //funcion de alto nivel
    const resultado = autos.filter(filtarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
   
    if(resultado.length) {
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado (){

    limpiarHTML();
    
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultado, intenta con otro termino de busqueda';
    resultado.appendChild(noResultado);
}

function filtarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
    return auto.marca === marca;
    }
    return auto;

}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo (auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo (auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas (auto){
    const {puertas} = datosBusqueda
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision (auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor (auto){
    const {color} = datosBusqueda
    if(color){
        return auto.color === color;
    }
    return auto;
}