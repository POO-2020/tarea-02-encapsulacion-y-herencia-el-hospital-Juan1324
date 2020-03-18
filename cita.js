import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
import Tiempos from "./tiempo.js"
import Doctor from "./doctor.js"
export default class Cita {

    constructor({fecha,hora,doctor,paciente}){
    this._fecha=fecha;
    this._hora=hora;
    this._doctor=doctor;
    this._paciente=paciente;
    }
    getFechaCita(){
        return this._fecha;
    }
    esIgualA(cita){
        if(cita.getFechaCita() === this._fecha){
        return true;
        }
        return false;
    }
    
    getPerfil(){
        return(`
        ${this._fecha.getFecha()}
        ${this._hora.getFormato24()}
        ${"Dr. "+this._doctor.getDoctor().getApellidoPaterno()}
        ${this._paciente.getNombre().getNombreCompleto()}`);
    }
}