const metodopago = prompt ('Por favor ingrese el motodo de pago');

switch (metodopago){
    case 'Efectivo':
        pagar();
        alert(`Pagaste con ${metodopago}`);
        break;
    case 'Cheque':
        alert(`Pagaste con ${metodopago}`);
        break;
    case 'tarjeta':
        alert(`Pagaste con ${metodopago}`);
        break;
    default:
        alert('Aun no haz seleccionado un metodo de pago');
        break;
}

function pagar (){
    alert('Pagando ...');
}