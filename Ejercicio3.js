// CREAMOS LA CLASE MOVIL 

class Movil {
constructor (marca,modelo,CPU,RAM,almacenamiento, ancho,alto, numCamaras){
    this.marca = marca;
    this.modelo = modelo;
    this.CPU = CPU;
    this.RAM = RAM;
    this.almacenamiento = almacenamiento;
    this.ancho = ancho;
    this.alto = alto;
    this.numCamaras = numCamaras;
}

toString() {
    return `Movil:
    -Marca : ${this.marca}
    -Modelo : ${this.modelo}
    -CPU : ${this.CPU}
    -RAM : ${this.RAM}
    -Almacenamiento : ${this.almacenamiento}
    -Ancho : ${this.ancho}
    -Alto : ${this.alto}
    -Numero Camaras : ${this.numCamaras} ` ;
}
}

// CREAMOS LOS CUATRO MOVILES CON SUS PARAMETROS 

const Xiaomi13TPro = new Movil("Xiaomi","13TPro","MediaTek Dimensity 9200+","12 o 16GB","256,512 o 1TB","162,2mm","75,7",4);
const SamsungS24Ultra = new Movil("Samsung","S24Ultra","Snapdragon 8 Gen 3","12","256,512 o 1024 GB","162,3mm","79",4);
const Iphone15 = new Movil("Iphone","15","Apple A16 Bionic","6GB","128,256 o 512GB","147,6mm","77,8",3);
const RealmeGT = new Movil("Realme","GT","Snapdragon 888","8 o 12GB","128 o 256GB","158,5mm","73,3",2);

// MOSTRAMOS LA INFORMACION DE CADA MOVIL 
console.log(Xiaomi13TPro.toString());
console.log("\n");
console.log(SamsungS24Ultra.toString());
console.log("\n");
console.log(Iphone15.toString());
console.log("\n");
console.log(RealmeGT.toString());
