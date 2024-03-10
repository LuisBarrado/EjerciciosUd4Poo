class Pelicula {
    constructor(jsonData) {
      const {
        nombre,
        añoEstreno,
        duracion,
        genero,
        actoresPrincipales,
        urlCartel,
        director,
      } = JSON.parse(jsonData);
  
      this.nombre = nombre;
      this.añoEstreno = añoEstreno;
      this.duracion = duracion;
      this.genero = genero;
      this.actoresPrincipales = actoresPrincipales;
      this.urlCartel = urlCartel;
      this.director = director;
    }
  
    mostrarInformacion() {
      console.log(`Información de la Película:
        - Nombre: ${this.nombre}
        - Año de Estreno: ${this.añoEstreno}
        - Duración: ${this.duracion} minutos
        - Género: ${this.genero}
        - Actores Principales: ${this.actoresPrincipales.join(', ')}
        - URL del Cartel: ${this.urlCartel}
        - Director: ${this.director}`);
    }
  }
  
//   CREAMOS UN OBJETO DE LA CLASE PELICULA Y LO PONEMOS A PRUEBA
  const datosPelicula = `{
    "nombre": "Spider-Man",
    "añoEstreno": 2002,
    "duracion": 121,
    "genero": "Superhéroes",
    "actoresPrincipales": ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst"],
    "urlCartel": "https://pics.filmaffinity.com/Spider_Man-945131720-large.jpg",
    "director": "Sam Raimi"
  }`;
  
  const peliculaEjemplo = new Pelicula(datosPelicula);
  
//   MOSTRAMOS LA INFORMACIÓN DE LA PELICULA EN LA CONSOLA
  peliculaEjemplo.mostrarInformacion();
  