import Nombre from "./nombre.js"
export default class Doctor{
    constructor(cedula,especialidad,nombre,numerotel){
        this.cedula=cedula;
        this.especialidad=especialidad;
        this.nombre=nombre;
        this.numerotel=numerotel;
    }
    getPerfil(){
        return(`${this.cedula},${this.especialidad},${this.nombre.getNombreCompleto()},${this.numerotel}`);
    }
}