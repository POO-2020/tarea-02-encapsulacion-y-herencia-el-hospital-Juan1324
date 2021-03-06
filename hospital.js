import Doctor from "./doctor.js"
import Cita from "./cita.js"

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
    buscarDoctor(doctor){
        let buscar = null;
        this._doctores.forEach(medico => {
            if (medico.esIgualA(doctor)){
                buscar = medico}
        })
        return buscar;
    }
    buscarCita(cita){
        let buscar = null;
        this._citas.forEach(reservacion => {
            if (reservacion.esIgualA(cita)){
                buscar = reservacion}
        })
        return buscar;
    }
    buscarIndiceDoctor(doctor){
        let indice = -1
        this._doctores.forEach((medico,x) => {
            if (medico.esIgualA(doctor)){
                indice= x;}
        });
        return indice;
    }
    buscarIndiceCita(cita){
        let indice = this._citas.findIndex(reservacion => reservacion.esIgualA(cita))
        return indice;
    }
    eliminarDoctor(doctor){
        let indice = this.buscarDoctor(doctor)
        if (indice < 0){
            return false}
        this._doctores.splice(indice,1)
        return true;
    }
    eliminarCita(cita){
        let indice = this.buscarCita(cita)
        if (indice < 0){
            return false}
        this._citas.splice(indice,1)
        return true;
    }    
    
    actualizarDoctor(doctor,nuevoDoctor){
        let indice = this.buscarIndiceDoctor(doctor);
        if (indice < 0){
            return false;
        }this._doctores.splice(indice,1,nuevoDoctor)
        return true;}

        actualizarCita(cita,nuevaCita){
            let indice = this.buscarIndiceCita(cita);
            if (indice < 0){
                return false;
            }this._citas.splice(indice,1,nuevaCita)
            return true;}
    }

