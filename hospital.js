import Doctor from "./doctor.js"
export default class Hospital{
    constructor(nombre,direcciones){
        this.nombre=nombre;
        this.direcciones=direcciones;
        this.doctores=[]
        this.citas=[]
    }
    registrarDoctor(doctor){
        this.doctores.push(doctor);
    }
    listarDoctores(){
        this.doctores.forEach((doctor, x) => {
            console.log(`(${x+1}) ${doctor.getPerfil()}`)
          });

    }
    registrarCita(cita){
        this.citas.push(cita);

    }
    listarCitas(){
        this.citas.forEach((cita,y) => {
            console.log(`(${y+1}) ${cita.getCita()}`);
        })

    }
}