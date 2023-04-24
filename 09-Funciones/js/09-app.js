const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando');
    },
    borrar: function (id){
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist con el nombre de ${nombre}`);
    },
    ReproducirPlaylist: function (nombre, id){
        console.log(`Se esta reproduciendo la playlist de ${nombre} con la cancion del id ${id}`)
    }
}



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Trap");
reproductor.ReproducirPlaylist('Trap', 50);