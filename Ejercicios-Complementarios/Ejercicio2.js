// CREAMOS LA CLASE MADRE TELEFONO 
class Telefono {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    llamar(numero){
        console.log(`Llamando al numero ${numero}`);
    }

    colgar(){
        console.log("Llamada Finalizada");
    }
}

// CREAMOS LA CLASE HIJA FIJO QUE HEREDA DE TELEFONO 
class TelefonoFijo extends Telefono{
constructor(marca,modelo,extension){
    super(marca,modelo);
    this.extension = extension;
}

marcarExtension(ext){
    console.log(`Marcando a la extension ${this.extension}`);
}
}

// CREAMOS LA CLASE HIJA QUE HEREDA DE TELEFONO 
class TelefonoMovil extends Telefono{
    constructor(marca,modelo,operador){
        super(marca,modelo);
        this.operador;
    }
enviarMensaje(mensaje){
    console.log(`Enviando mensaje : ${mensaje}`);
}
}

// A CONTINUACIÓN CREAMOS LAS INSTANCIAS DE LAS CLASES
const telefonoFijo = new TelefonoFijo("Panasonic","KX-TG123","101");
const telefonoMovil = new TelefonoMovil("Xiaomi","13TPRO","DigiMobil");

// PARA FINALIZAR, USAMOS LOS METODOS DE LAS CLASES 

telefonoFijo.llamar("123456789");
telefonoFijo.colgar();
telefonoFijo.marcarExtension("102");

telefonoMovil.llamar("987654321");
telefonoMovil.colgar();
telefonoMovil.enviarMensaje("Buenas tardes, que tal?");