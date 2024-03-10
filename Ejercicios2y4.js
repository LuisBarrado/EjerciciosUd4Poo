// EJERCICIO 2 -- HERENCIAS Y POLIMORFISMO

// CREAMOS LA CLASE VEHICULO
class Vehiculo {
    constructor (marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
// CREAMOS EL METODO DE TODOS LOS VEHICULOS EN COMUN
conducir() {
    console.log(`El ${this.marca} ${this.modelo} está en movimiento`);
}
}

// CREAMOS LA CLASE COCHE QUE HEREDA DE VEHICULO
class Coche extends Vehiculo{
    constructor(marca,modelo, numeroPuertas){
        super(marca,modelo);
        this.numeroPuertas = numeroPuertas;
    }

abrirPuertas() {
    console.log(`Abriendo las ${this.numeroPuertas} puertas del ${this.marca} ${this.modelo}.`);
}
}

// CREAMOS LA CLASE CAMION QUE HEREDA DE VEHICULO
class Camion extends Vehiculo{
    constructor(marca,modelo,cargaMaxima){
        super(marca,modelo);
        this.cargaMaxima = cargaMaxima;
    }
cargar() {
    console.log(`Cargando el camión ${this.marca} ${this.modelo} con ${this.cargaMaxima} toneladas.`);
}
}

// CREAMOS LA CLASE MOTO QUE HEREDA DE VEHICULO
class Moto extends Vehiculo{
    constructor(marca,modelo,tipo){
        super(marca,modelo);
        this.tipo = tipo;
    }
acelerar(){
    console.log(`Acelerando la moto ${this.marca} ${this.modelo} de tipo ${this.tipo}.`);
}
}
// USAMOS LAS CLASES Y EL POLIMORFISMO 
const coche = new Coche("Fiat","500",4);
const camion = new Camion("Volvo","FH16",20);
const moto = new Moto("Harley-Davidson","Sportster","Custom");

coche.conducir();
coche.abrirPuertas();

camion.conducir();
camion.cargar();

moto.conducir();
moto.acelerar();

// EJERCICIO 4 --RECORRIDOS CON HERENCIA 

// RECORREMOS LAS PROPIEDADES DE LOS OBJETOS 
console.log("Propiedades : ");

for (let datos in coche){
    console.log(`Propiedades : ${datos} - ${Coche[datos]}`);
}

for (let datos in moto){
    console.log(`Propiedades : ${datos} - ${Moto[datos]}`);
}

for (let datos in camion){
    console.log(`Propiedades : ${datos} - ${Camion[datos]}`);
}

console.log("Fin de las Propiedades");
