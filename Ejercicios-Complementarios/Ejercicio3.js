// CREAMOS LA CLASE AULA 

class Aula {
    constructor(nombre){
        this.nombre = nombre;
    }

    // CREAMOS EL METODO DE POLIMORFISMO PARA REALIZAR ACTIVIDADES EN EL AULA 
    realizarActividad(){
        console.log(`Realizando actividad en el aula ${this.nombre}`);
    }
}

// CREAMOS LA CLASE HIJA AULAMUSICA QUE HEREDA DE AULA 
class AulaMusica extends Aula {
    constructor(nombre,instrumento){
        super(nombre);
        this.instrumento= instrumento;
    }

// Sobreescribimos el metodo de realizaractividad para las actividades de música
realizarActividad(){
    console.log(`En el aula de Música (${this.nombre}), tocando el isntrumento: ${this.instrumento}`);
}
}

// CREAMOS LA CLASE HIJA AULATECNOLOGIA QUE HEREDA DE AULA 
class AulaTecnologia extends Aula{
    constructor(nombre,equipo){
        super(nombre);
        this.equipo = equipo;
    }
// Sobreescribimos el metodo de realizaractividad para las actividades de tecnología 
realizarActividad(){
    console.log(`En el aula de Tecnología (${this.nombre}), utilizando el equipo: ${this.equipo}`);
}
}

// CREAMOS LAS INSTANCIAS DE LAS CLASES
const aulaMusica = new AulaMusica("Aula 1","Piano");
const aulaTecnologia = new AulaTecnologia("Aula 2", "Ordenador de Sobremesa");

// USAMOS EL METODO POLIMORFICO PARA REALIZAR ACTIVIDADES
aulaMusica.realizarActividad(); 
aulaTecnologia.realizarActividad();

// USAMOS EL MISMO METODO PARA UN AULA GENERICA 
const aulaGenerica = new Aula("Aula 3");
aulaGenerica.realizarActividad();