export default class Tiempo{
    /**
     * 
     * @param {Number} hora 
     * @param {Number} minutos 
     * @param {String} periodo 
     */
    constructor(hora,minutos,periodo){
        this._hora=hora;
        this._minutos=minutos;
        this._periodo=periodo;
    }
    setTiempo(){
        return(`${this._hora}:${this._minutos} ${this._periodo}`);
    }

    getFormato12(){
    return (`${this._hora}:${this._minutos} ${this._periodo}`);
    }
    getFormato24(){
    if (this._hora !=12 && this._periodo=="pm"){
    return (`${this._hora+12}:${this._minutos}`);
     }else{     
     }
    return (`${this._hora}:${this._minutos}`);
    }
}