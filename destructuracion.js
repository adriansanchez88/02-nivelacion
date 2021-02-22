const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}`
    } 
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;*/

//const {nombre, apellido, profesion} = personaje;

const imprimirPersonaje = ({nombre, apellido, profesion})=> {
    console.log(nombre, apellido, profesion);
}
imprimirPersonaje(personaje);
//console.log(nombre, apellido, profesion);
//console.log(personaje.getDescripcion());