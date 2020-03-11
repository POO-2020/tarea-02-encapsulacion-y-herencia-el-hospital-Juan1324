import Nombre from "./nombre.js"
import Fecha from "./fecha.js";
export default class Paciente {

    constructor(nombre,numerotel,fecha){
        this.nombre=nombre;
        this.numerotel=numerotel;
        this.fecha=fecha;
    }
    getPerfil(){
        return(`${this.nombre.getNombreCompleto()},${this.fecha.getFecha()},${this.numerotel}`);

    }
} 