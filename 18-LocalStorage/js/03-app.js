localStorage.removeItem('nombre');

//Actualizar un registro
const meseArray = JSON.parse(localStorage.getItem('meses'));
console.log(meseArray);
meseArray.push('Nuevo mes');
console.log(meseArray);
localStorage.setItem('meses', JSON.stringify(meseArray));

//Eliminar todo en el local storage
localStorage.clear();