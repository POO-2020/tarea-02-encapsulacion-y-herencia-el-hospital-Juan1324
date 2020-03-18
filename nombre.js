export default class Nombre {
    /**
     * 
     * @param {String} nombre 
     * @param {String} apellidoPaterno 
     * @param {String} apellidoMaterno 
     */
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this._nombre=nombre;
        this._apellidoPaterno=apellidoPaterno;
        this._apellidoMaterno=apellidoMaterno;
    }
    getApellidoPaterno(){
        return(this._apellidoPaterno)
    }
    getNombreCompleto(){
        return(`${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`);
    }
    getApellidoNombre(){
        return(`${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`);
    }
    getIniciales(){
        let x=this._nombre[0]
        let y=this._apellidoPaterno[0]
        let z=this._apellidoMaterno[0]

        return(`${x}${y}${z}`);
    }
}
