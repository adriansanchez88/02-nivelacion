/*setTimeout(() => {
    console.log('Hola Mundo');        
}, 2000);

const saludar = () => {
    console.log('Hola Mundo');        
}

setTimeout(saludar, 2000);*/

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => callback(user), 1000);
}

getUserById(10, (usuario) => {
    console.log(usuario.nombre);
});