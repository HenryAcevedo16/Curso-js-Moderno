// let edad = parseInt(prompt("Ingrse su edad"));

// if (edad <16){
    // alert("No puede entrar a la fiesta");
// }else if (edad <18){
    // alert("Puede entrar a la fiesta con un Adulto");
// }else{
    // // alert("Puede emtrar a la fiesta");
// }

// let numero3 = parseInt(prompt("Ingrese un numero"));
// let numero4 = parseInt(prompt("Ingrese un numero"));

// alert(numero3 + numero4);
// alert(numero3 - numero4);
// alert(numero3 * numero4);
// alert(numero3 / numero4);

// let nombre =prompt ("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if(nombre != "" && apellido != ""){
//     alert(`Nombre: ${nombre} Apellido: ${apellido}`);
// }else{
//     alert("Ingrese su nombre y apellido");
// }

// let nombre = prompt("Ingrese su nombre");
// let sitomas = prompt("Tiene covid?");

// while(sitomas != "Si"){
//     alert(`El paciente: ${nombre} no tiene covid`)
//     nombre = prompt("Ingrese su nombre");
//     sitomas = prompt("Tiene covid?");
// }
// alert(`El paciente: ${nombre} tiene covid por favor ingresarlo`);

// for (let paciente =1; turno <=10; turno++ ){
//     let nombre = prompt("Ingrese su nombre");
//     alert(`Turno #${turno} Nombre: ${nombre}`);
// }

calculadora => {
    while(true){
        let monto = prompt ("Ingrese el monto");
        if(monto ===0){
            alert("Monto Ingresado es invalido");
            return;
        }else if (monto <= 0){
            alert("Ingrese el monto");
        }else if (monto<= 200){
            alert("Monto: $" + monto);
            alert("Impuesto: $" + (parseFloat(monto) * 0.1));
        }else{
            alert("Monto: $" + monto);
            alert("Impuesto: $" +((parseFloat(monto) *0.35)));
        }
    }
}

calculadora();