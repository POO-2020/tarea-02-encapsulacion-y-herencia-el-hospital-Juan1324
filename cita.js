import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import doctor from "./doctor.js"
export default class Cita{
    
    constructor({fecha,hora,doctor,paciente}){
        this._fecha=fecha;
        this._hora=hora;
        this._doctor=doctor;
        this._paciente=paciente;
    }
    getDoctor(){
        return this._doctor
    }
    getHora(){
        return this._hora
    }
    getPerfil(){
        return(`
        ${this._fecha.getFecha()}
        ${this._hora.getFormato24()}
        ${"Dr. "+this._doctor.getDoctor().getApellidoPaterno()}
        ${this._paciente.getNombre().getNombreCompleto()}`);
    }
}