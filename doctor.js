import Nombre from "./nombre.js"

export default class Doctor{
    constructor({cedula,especialidad,doctor,telefono
    }){
        this._cedula=cedula;
        this._especialidad=especialidad;
        this._doctor=doctor;
        this._telefono=telefono;
    }
    getDoctor(){
        return(this._doctor)
    }
    getCedula(){
        return(this._cedula)
    }
    esIgualA(doctor){
        if (doctor.getCedula() === this._cedula){
            return true;
        }
        return false;
    }
    
    getPerfil(){
        return(`
        ${this._doctor.getNombreCompleto()}
        ${this._especialidad}
        ${this._telefono}
        ${this._cedula}`);
    }
}