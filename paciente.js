import Nombre from "./nombre.js"
import Fecha from "./fecha.js";
export default class Paciente {

    /**
     * 
     * @param {String} nombre 
     * @param {Number} numerotel 
     * @param {Date} fecha 
     */
    constructor(nombre,numerotel,fecha){
        this._nombre=nombre;
        this._numerotel=numerotel;
        this._fecha=fecha;
    }
    getPerfil(){
        return(`${this._nombre.getNombreCompleto()},${this._fecha.getFecha()},${this._numerotel}`);

    }
} 