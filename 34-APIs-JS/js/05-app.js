document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('ejecutar la funcion para reproducir el video...');
    }else{
        console.log('Pausar el video');
    }
})