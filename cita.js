import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import doctor from "./doctor.js"
export default class Cita{
    
    constructor(fecha,hora,doctor,paciente){
        this.fecha=fecha;
        this.hora=hora;
        this.doctor=doctor;
        this.paciente=paciente;
    }
    getCita(){
        return(`${this.fecha.getFecha()},${this.hora.getFormato24()},${this.doctor.nombre.getNombreCompleto()},${this.paciente.nombre.getNombreCompleto()}`);
    }
}
