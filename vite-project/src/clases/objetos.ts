const estudiante = {
    matricula: 'A01286189',
    nombre: 'Alex',
    edad: 20,
    direccion: {
        ciudad: 'Monterrey',
        cp: 64800
    }
};

console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = "Ramon";

console.log(estudiante2);