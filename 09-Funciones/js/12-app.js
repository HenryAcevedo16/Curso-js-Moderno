const carrito =[
    {nombre:'Monitor 27 pulgadas', precio: 500},
    {nombre:'Television', precio: 100},
    {nombre:'Tablet', precio: 200},
    {nombre:'Audifonos', precio: 300},
    {nombre:'Teclado', precio: 400},
    {nombre:'Celular', precio: 700},
]


//Map hace un nuevo arreglo y forEach no

const nuevoArreglo = carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

const nuevoArreglo2 = carrito.map(producto =>`${producto.nombre} - Precio: ${producto.precio}`)



const reproductor = {
    reproducir: (id) => {console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar:()=>{console.log('Pausando');
    },
    borrar: (id) =>{ console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist:(nombre) =>{console.log(`Creando playlist con el nombre de ${nombre}`);
    },
    ReproducirPlaylist: (nombre, id) => { console.log(`Se esta reproduciendo la playlist de ${nombre} con la cancion del id ${id}`)
    }
}



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Trap");
reproductor.ReproducirPlaylist('Trap', 50);