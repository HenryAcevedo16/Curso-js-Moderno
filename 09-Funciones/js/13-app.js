const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:()=> console.log('Pausando'),
    borrar:id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist:nombre => console.log(`Creando playlist con el nombre de ${nombre}`),
    ReproducirPlaylist:(nombre, id) => console.log(`Se esta reproduciendo la playlist de ${nombre} con la cancion del id ${id}`),

    set nuevaCancion (cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion (){
        console.log(`${this.cancion}`);
    }

}

reproductor.nuevaCancion = 'Esclava - Anuel AA'
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Trap");
reproductor.ReproducirPlaylist('Trap', 50);