
iniciarApp();

function iniciarApp (){
    console.log('Iniciando app');
    segundaFuncion();
}

function segundaFuncion (){
    console.log('Desde la segunda funcion');
    ususarioAutenticado('Juan');
}

function ususarioAutenticado (usuario){
    console.log ('Autenticado ususario... espere...');
    console.log(`Usuario autenticado con exito: ${usuario}`);
}