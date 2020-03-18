import Nombre from "./nombre.js"
import Fecha from "./fecha.js";
export default class Paciente {

    /**
     * 
     * @param {String} nombre 
     * @param {Number} numerotel 
     * @param {Date} fecha 
     */
    constructor({nombre,fecha,telefono}){
        this._nombre=nombre;
        this._telefono=telefono;
        this._fecha=fecha;
    }
    getNombre(){
        return this._nombre
    }
    
    getPerfil(){
        return(`
        ${this._nombre.getNombreCompleto()}
        ${this._fecha.getFecha()}
        ${this._telefono}`);
    }
} 