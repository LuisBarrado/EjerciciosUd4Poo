class ClubFutbol{
    constructor(añoFundacion, numSocios, nombreEstadio, ciudad, palmares = []){
        this.añoFundacion = añoFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares;
    }
    // CON ESTE METODO MOSTRAMOS LA INFORMACIÓN DEL CLUB 
    verClub(){
        console.log(`Club de Fútbol:
        - Año de Fundación: ${this.añoFundacion}
        - Número de Socios: ${this.numSocios}
        - Nombre del Estadio: ${this.nombreEstadio}
        - Ciudad: ${this.ciudad}
        - Palmarés: ${this.mostrarPalmares()}`);
    }

    // CREAMOS EL OTRO METODO PARA MOSTRAR EL PALMARES DE MANERA FORMATEADA
    mostrarPalmares(){
        return this.palmares
        .map((titulo) => `${titulo.nombre} (${titulo.año})`)
        .join(', ');
    }
}

// CREAMOS SEIS OBJETOS CON DIFERENTES PARAMETROS
const Atletico = new ClubFutbol();
const RealMadrid = new ClubFutbol(1902);
const Barcelona = new ClubFutbol(1899,143.086);
const Athletic = new ClubFutbol(1898,42.949,"San Mamés");
const Sevilla = new ClubFutbol(1958,43.864,"Ramón Sánchez Pizjuán","Sevilla");
const Betis = new ClubFutbol(1907,85.708,"Benito Villamarin", "Sevilla", [
    { nombre : 'Liga', año:1935 },
    {nombre: 'Copa del Rey', año: 1977},
]);

// AHORA REALIZAREMOS EL RECORRIDO DE CADA OBJETO MODIFICANDO ALGUNOS PARAMETROS
Atletico.añoFundacion = 1903;
RealMadrid.ciudad = "Madrid";
Barcelona.numSocios = 143.100;
Athletic.nombreEstadio = "Nuevo San Mamés";
Sevilla.palmares.push({ nombre: "Europa League", año: 2006});
Betis.palmares[0].año = 1936;

// MOSTRAMOS LA INFORMACIÓN DE CADA CLUB
Atletico.verClub();
console.log('\n');
RealMadrid.verClub();
console.log('\n');
Barcelona.verClub();
console.log('\n');
Athletic.verClub();
console.log('\n');
Sevilla.verClub();
console.log('\n');
Betis.verClub();

// LOS DATOS SON COHERENTES, YA QUE AL MODIFICAR DE MANERA INTENCIONADA LAS PROPIEDADES, EL METODO DE VERCLUB 
// REFLEJA ESTAS MODIFICACIONES