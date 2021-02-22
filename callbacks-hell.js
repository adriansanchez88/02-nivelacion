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

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find( (emp) => emp.id === id );
    if (empleado) {
        callback(null, empleado);
    }
    else {
        callback(new Error('El empleado no existe'))
    }
}

const getSueldoById = (id, callback) => {
    const salario = sueldos.find( (sal) => sal.id === id );
    if (salario) {
        callback(null, salario);
    }
    else {
        callback(new Error('El empleado no cobra'))
    }
}

const id = 3;

getEmpleadoById(id, (error, employee) => {
    if (error) {
        console.log('ERROR!!!!!');
        console.log(error);        
    }
    else {
        getSueldoById(id, (error, salario) => {
            if (error) {
                console.log(`El empleado es: ${employee.nombre} y no tiene salario`);        
            }
            else {
                console.log(`El empleado es: ${employee.nombre} y cobra ${salario.sueldo}`);
            }
        })        
    }
});