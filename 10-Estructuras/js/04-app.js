const dinero = 500;
const totalapagar = 200;
const  tarjeta = true;
const cheque = true;


if(dinero >= totalapagar){
   console.log('Si puede pagar');

}else if (cheque){
    console.log('Si tengo cheque');

}else if (tarjeta){
    console.log('Si puedo pagar porque tengo trajeta');

}else {
   console.log('No puede pagar')
}