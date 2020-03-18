import Doctor from "./doctor.js"
export default class Hospital{
    constructor(nombre,direcciones){
        this._nombre=nombre;
        this._direcciones=direcciones;
        this._doctores=[]
        this._citas=[]
    }
    registrarDoctor(doctor){
        this._doctores.push(doctor)
    }

    registrarCita(cita){
        this._citas.push(cita)
    }

    listarDoctores(){
        this._doctores.forEach( (doctor,x) => {
            console.log(`(${x+1}) ${doctor.getPerfil()}`)
        })      
    }
    listarCitas(){
        this._citas.forEach( (cita,y) => {
            console.log(`(${y+1}) ${cita.getPerfil()}`)
        })      
    }

    registrarCita(cita){
        this._citas.push(cita);

    }
    listarCitas(){
        this._citas.forEach((cita,y) => {
            console.log(`(${y+1}) ${cita.getCita()}`);
        })

    }
}