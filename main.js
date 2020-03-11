import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{

    constructor(){
        
        this.fecha= new Fecha(2,2,2001)
        
    }
    probarFecha(){

        console.log("Años "+this.fecha.getAños())
        console.log("Meses "+this.fecha.getMeses())
        console.log("Semanas "+this.fecha.getSemanas())
        console.log("Dias "+this.fecha.getDias())
        console.log("Dia "+this.fecha.getDia())
        console.log("Fecha "+this.fecha.getFecha())    
    }
}
let app=new Main();
app.probarFecha();
