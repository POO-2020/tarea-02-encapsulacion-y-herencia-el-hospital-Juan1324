import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{

    constructor(){
        this.fecha=new Fecha(15,4,2019)
        this.tiempo=new Tiempo(14,30,"pm")
        this.nombre=new Nombre("Adrian","Gonzales","Moreno")

        let infPaciente={
            nombre: new Nombre("Teresa","Cortez","Sandoval"),
            fecha: new Fecha(21,5,2014),
            telefono: 3129022324
        }

        this.paciente= new Paciente(infPaciente)
        
    }
    probarFecha(){
        console.log("///////Probar fecha///////")
        console.log(this.fecha.getAños())
        console.log(this.fecha.getDiaFecha())
        console.log(this.fecha.getDias())
        console.log(this.fecha.getFecha())
        console.log(this.fecha.getMeses())
        console.log(this.fecha.getSemanas())
    }
    probarTiempo(){

    }

    probarNombre(){
    
    }
    probarPaciente(){
       
    }

}
let app=new Main();
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();


