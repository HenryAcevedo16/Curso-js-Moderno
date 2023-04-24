const producto = {
    nombre: "Monitor 20 pulgas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto2 = {
    nombre: "Iphone 12 pro max",
    precio: 52000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();

//La palabra reservada this busca la propiedad dentro del mismo objeto
//this es una forma de referirse al onjeto en si mismo