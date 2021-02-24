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

const getEmpleadoById = async (id) => {
    const empleado = empleados.find( (emp) => emp.id === id );
    if (empleado) {
        return empleado;
    }else{
        throw new Error(`El empleado con id ${id} no existe`);
    }
}
const getSueldoById = async (id) => {
    const salario = sueldos.find( (sal) => sal.id === id );
    if (salario) {
        return salario;
    }else{
        throw new Error(`El empleado con id ${id} no tiene salario`);
    }
}
const id = 5;

const getDatosEmpleados = async (id) => {
    try {
        const empleado = await getEmpleadoById(id);
        const salario = await getSueldoById(id);
        return {
            id,
            nombre: empleado.nombre,
            sueldo: salario.sueldo
        }
    } catch (error) {
        throw error;
    }
}

getDatosEmpleados(id)
.then(datos => console.log(`El empleado con id ${datos.id} es ${datos.nombre} y tiene un sueldo de ${datos.sueldo}`))
.catch(error => console.log(error.message));