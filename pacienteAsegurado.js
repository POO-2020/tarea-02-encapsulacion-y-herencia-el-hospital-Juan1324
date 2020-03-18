import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Nombre from "./nombre.js";

export default class PacienteAsegurado extends Paciente {
    constructor({nombre,fecha,telefono,numeroPoliza,finVigencia,compañia}){
        super({ nombre, fecha, telefono})
        this._finVigencia= finVigencia;
        this._numeroPoliza= numeroPoliza;
        this._finVigencia= numeroPoliza;
        this._compañia= compañia;
    }
    
    getPerfil(){
        return(`
        ${this._nombre.getNombreCompleto()}
        ${this._fecha.getFecha()}
        ${this._telefono}
        ${this._numeroPoliza}
        ${this._fechaFinVigencia}
        ${this._compañia}`)
    }

}