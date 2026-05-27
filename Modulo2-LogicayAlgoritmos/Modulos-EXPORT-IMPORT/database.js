//Se crea un objeto que agrupa las operaciones de la base de datos
const database = {
    saveData:(key,data) => {
        console.log(`Guardando datos: ${key}', ${data})`);
        return "Datos guardados exitosamente.";
    },

    getData:(key) => {
        console.log(`Obteniendo datos para la clave: ${key}`);
        //Se simula el retonro de un registro
        return {id:104, status:"Activo", puesto:"Trainee"};
    }
};

// Se exporta el objeto para que pueda ser utilizado en otros módulos
export default database;