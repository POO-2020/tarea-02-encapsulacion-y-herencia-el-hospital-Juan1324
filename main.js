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

        let infDoctor={
            
            doctor: new Nombre("Gonzalo","Ramírez","Corona"),
            especialidad: "Cirujano",
            telefono: 3127860959,
            cedula: "kj67dw78"
        }
        this.doctor= new Doctor(infDoctor)
        
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
        console.log("///////Probar Tiempo///////")
        console.log(this.tiempo.getFormato12())
        console.log(this.tiempo.getFormato24())
    }

    probarNombre(){
        console.log("///////Probar Nombre///////")
        console.log(this.nombre.getNombreCompleto())
        console.log(this.nombre.getApellidoNombre())
        console.log(this.nombre.getIniciales())
    }
    probarPaciente(){
        console.log("///////Probar Paciente///////")
        console.log(this.paciente.getPerfil())
    }
    probarDoctor(){
        console.log("///////Probar Paciente///////")
        console.log(this.doctor.getPerfil())
    }

}
let app=new Main();
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();



