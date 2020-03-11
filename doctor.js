import Nombre from "./nombre.js"
export default class Doctor{
    constructor(cedula,especialidad,nombre,numerotel){
        this._cedula=cedula;
        this._especialidad=especialidad;
        this._nombre=nombre;
        this._numerotel=numerotel;
    }
    getPerfil(){
        return(`${this._cedula},${this._especialidad},${this._nombre.getNombreCompleto()},${this._numerotel}`);
    }
}