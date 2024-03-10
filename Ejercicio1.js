function Usuario (nombre, contraseña) {
    this.nombre = nombre;
    this.contraseña = contraseña;
}

// CREAMOS EL OBJETO
const usuario = {
    nombre : "Luis",
    contraseña :  "12345",
};

// Creamos la función para que valide el usuario y la contraseña coincidiendo con el objeto que hemos creado
function validacionUsuario(nombreintroducido, contraseñaintroducida) {
    if (nombreintroducido === usuario.nombre && usuario.contraseña === contraseñaintroducida) {
        console.log (`Bienvenido ${nombreintroducido}`);
    } else {
        console.log (`Ha ocurrido un error, el ${nombreintroducido} no tiene esa contraseña`)
    }
}

validacionUsuario("Luis","12345");