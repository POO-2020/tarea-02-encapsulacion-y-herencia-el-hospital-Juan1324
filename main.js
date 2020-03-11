import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{

    constructor(){
        this.paciente1= new Paciente(
            new Nombre("Samuel","Cardenas","Del Rio"),
            3121086574,
            new Fecha(12,10,2010))
        
    }
    probarFecha(){

        let fecha= new Fecha(
            10,
            12,
            2000
        )

        console.log("Años "+fecha.getAños())
        console.log("Meses "+fecha.getMeses())
        console.log("Semanas "+fecha.getSemanas())
        console.log("Dias "+fecha.getDias())
        console.log("Dia "+fecha.getDia())
        console.log("Fecha "+fecha.getFecha())    

    }
    probarTiempo(){
        let tiempo= new Tiempo(
            12,
            30,
            "am"
        )
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }

    probarNombre(){
        let persona= new Nombre(
            "Juan",
            "Ramos",
            "Campos"
        )
        console.log(persona.getNombreCompleto())
        console.log(persona.getApellidoNombre())
        console.log(persona.getIniciales())
    }
    probarPaciente(){
        console.log(this.paciente1.getPerfil())
    }

}
let app=new Main();
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();


