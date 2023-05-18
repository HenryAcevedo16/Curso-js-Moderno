const usuario = true;
const puedePagar = true;

if (usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!usuario && !puedePagar){  //el signo de exclamasion ! es para decir si no es usuario y puede pagar
    console.log('No puede comprar');
}else if (!usuario){
    console.log('Inicia sesion o create un cuenta');
}else if (!puedePagar){
    console.log('Fondos insuficientes');
}