const aplicarDescuento = new Promise  ((resolve, reject) => {
    
    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar')
    }
})

aplicarDescuento
    .catch(error => console.log(error))
    .then( resultado => descuento(resultado));


//HAY 3 VALORES POSIBLES
//fULFILLED - EL PROMISE SE CUMPLIO
//REJECTED - EL PROMISE NO SE CUMPLIO
//PENDING - NO SE HA CUMPLIDO Y TAMPOCO FUE RECHAZADO

function descuento(mensaje){
    console.log(mensaje);
}