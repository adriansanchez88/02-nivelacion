const empleados = [
    {
        id: 1,
        nombre: 'Pepe'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject)=>{
        const empleado = empleados.find( (emp) => emp.id === id );
        if (empleado) {
            resolve(empleado);
        }
        else {
            reject('El empleado no existe')
        }
    });    
}

const getSueldoById = (id) => {
    
    return new Promise((resolve, reject)=>{
        const salario = sueldos.find( (sal) => sal.id === id );
        if (salario) {
            resolve(salario);
        }
        else {
            reject('El empleado no cobra')
        }
    })
}

const id = 3;
let nombre;

getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSueldoById(id);
    })
    .then(salario => {
        console.log(`El empleado ${nombre} cobra ${salario.sueldo}`);
    })
    .catch(error => console.log(error));