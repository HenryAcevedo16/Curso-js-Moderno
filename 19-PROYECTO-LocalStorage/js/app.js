 //Variables
 const formulario = document.querySelector('#formulario');
 const listaTweets = document.querySelector('#lista-tweets');
 let tweets = [];


 //Event Listeners
eventListeners();

function eventListeners (){
    formulario.addEventListener('submit', agregarTweet);
}



 //Funciones
 function agregarTweet(e){
    e.preventDefault();

   //TextArea donde el usuario escribe
   const tweet = document.querySelector('#tweet').value;
   
   //Validacion
   if(tweet === '') {
    mostrarError('Un mensaje no puede ir vacio');
    return //Evita qie se ejecuten mas lineas de codigo
   }
   
   const tweetObj = {
    id:Date.now,
    tweet
   }

   //Añadir el arreglo de los tweets
   tweets = {...tweets, tweetObj};

   //Una vez agregado vamos a crear el html
   crearHTML();

   //Reiniciar el formulario
   formulario.reset();



 }

 //Mostrar Mensaje de error
 function mostrarError(error){
    const menajeError = document.createElement('P');
    menajeError.textContent = error;
    menajeError.classList.add('error');

    //Insentarlo en el Contenido
    const Contenido = document.querySelector('#contenido');
    Contenido.appendChild(menajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        menajeError.remove();
    }, 3000);

 }

 //Muestra un listado de los tweets

 function crearHTML (){

    limpiarHTML();

    if(tweets.length >0){
        tweets.forEach(tweet => {
            //Crear el html
            const li = document.createElement('li');

            //Añadir el texto
            li.innerHTML = tweet.tweet;

            //insertarlo en el html
            listaTweets.appendChild(li);
        });
    }
 }

 //Limpiar el html

 function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
 }