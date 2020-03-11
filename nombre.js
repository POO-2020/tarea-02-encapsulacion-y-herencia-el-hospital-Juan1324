export default class Nombre {
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
    }
    getNombreCompleto(){
        return(`${this.nombre}${this.apellidoPaterno}${this.apellidoMaterno}`);

    }
    getApellidoNombre(){
        return(`${this.apellidoPaterno}${this.apellidoMaterno}${this.nombre}`);

    }
    getIniciales(){
        let x=this.nombre[0]
        let y=this.apellidoPaterno[0]
        let z=this.apellidoMaterno[0]

        return(`${x}${y}${z}`);
    }
}
