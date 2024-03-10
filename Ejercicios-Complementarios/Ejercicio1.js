// CREAMOS LA CLASE VEHICULO Y ENCAPSULAMOS SUS ATRIBUTOS

class Vehiculo {
    #marca;
    #modelo;


// CREAMOS EL CONSTUCTOR QUE INICIA LAS PROPIEDADES

constructor(marca,modelo){
    this.#marca= marca;
    this.#modelo= modelo;
}

// CON EL METODO PUBLICO OBTENEMOS LA INFORMACIÓN DEL VEHICULO
obtenerInformacion() {
    return `Vehiculo: ${this.#marca} ${this.#modelo}`;
}

// CON EL METODO PRIVADO QUE REALIZA UN MANTENIMIENTO 
#realizarMantenimiento() {
    console.log(`Realizando mantenimiento para ${this.#marca} ${this.#modelo}`);
}

// METODO PUBLICO QUE PERMITE REALIZAR UN MANTENIMIENTO EXTERNO
realizarMantenimentoExterno(){
    // LLAMAMOS AL METODO PRIVADO
    this.#realizarMantenimiento();
    console.log(`Mantenimiento externo realizado para ${this.#marca} ${this.#modelo}`)
}
}
// CREAMOS UNA INSTANCIA DE LA CLASE VEHICULO 
const miCoche = new Vehiculo("Ford","Fiesta");

console.log(miCoche.obtenerInformacion());

miCoche.realizarMantenimentoExterno();