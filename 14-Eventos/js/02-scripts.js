const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegacion');

    nav.getElementsByClassName.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log(('Entrando en la navegacion'));

    nav.style.backgroundColor = 'red';
})

//mousedown = somilar al click
//click
//dblclick = doble click
//mouseup = cuando sueltas el mouse

