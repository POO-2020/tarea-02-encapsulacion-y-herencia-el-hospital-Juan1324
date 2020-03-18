import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"


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

        let infPaciente2={
            nombre: new Nombre("Amanda","Astilla","Beltrán"),
            fecha: new Fecha(21,5,2014),
            telefono: 3129022324
        }

        this.paciente= new Paciente(infPaciente2)

        let infPaciente3={
            nombre: new Nombre("Veronica","Torre","Valencia"),
            fecha: new Fecha(21,5,2014),
            telefono: 3129022324
        }

        this.paciente= new Paciente(infPaciente3)

        let infDoctor={
            
            doctor: new Nombre("Gonzalo","Ramírez","Corona"),
            especialidad: "Cirujano",
            telefono: 3127860959,
            cedula: "kj67dw78"
        }
        this.doctor= new Doctor(infDoctor)

        let infDoctor2={
            
            doctor: new Nombre("Pedro","Corona","Sanchéz"),
            especialidad: "Neurólogo",
            telefono: 3129133487,
            cedula: "jbksd83"
        }
        this.doctor2= new Doctor(infDoctor2)

        let infDoctor3={
            
            doctor: new Nombre("Rosa","Gómez","Solano"),
            especialidad: "Pediatra",
            telefono: 3125793109,
            cedula: "cvx635"
        }
        this.doctor3= new Doctor(infDoctor3)
        
        let infCita = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(4, 25,'pm'),
            doctor: new Doctor(infDoctor),
            paciente: new Paciente(infPaciente)
        }
        this.cita= new Cita(infCita)

        let infCita2 = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(4, 25,'pm'),
            doctor: new Doctor(infDoctor),
            paciente: new Paciente(infPaciente)
        }
        this.cita2= new Cita(infCita2)

        let infCita3 = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(4, 25,'pm'),
            doctor: new Doctor(infDoctor),
            paciente: new Paciente(infPaciente)
        }
        this.cita3= new Cita(infCita3)

        let infPacienteAsegurado={
            nombre: new Nombre('Thomas','García','Carrillo'),
            fecha: new Fecha(7,2,2018),
            telefono:3128796483,
            numeroPoliza:89807,
            fechaFinVigencia: new Fecha(19,5,2018),
            compañia:"HT"
        }
        this.PacienteAsegurado=new PacienteAsegurado(infPacienteAsegurado)

        let infhospital={
            nombre: "HT",
            direcciones:"Colonia Santa Marta, calle La condesa #245"
        }
        this.hospital=new Hospital(infhospital)

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
    probarCita(){
        console.log("///////Probar Cita///////")
        console.log(this.cita.getPerfil())
    }
    probarPacienteAsegurado(){
        console.log("///////Probar Paciente Asegurado///////")
        console.log(this.PacienteAsegurado.getPerfil())
    }
    probarHospital(){
        console.log("////////////////////////")
        this.hospital.registrarDoctor(this.doctor)
        this.hospital.registrarDoctor(this.doctor2)
        this.hospital.registrarDoctor(this.doctor3)
        this.hospital.listarDoctores()

        //Buscar Doctor
        console.log(this.hospital.buscarDoctor(this.doctor))
        console.log(this.hospital.buscarDoctor(this.doctor2))
        console.log(this.hospital.buscarDoctor(this.doctor3))

        //Encontrar Indice
        console.log(this.hospital.buscarIndiceDoctor(this.doctor))
        console.log(this.hospital.buscarIndiceDoctor(this.doctor2))
        console.log(this.hospital.buscarIndiceDoctor(this.doctor3))

        //Eliminar Doctores
        console.log(this.hospital.eliminarDoctor(this.doctor))
        this.hospital.listarDoctores()
        
        //Actualizar
        console.log(this.hospital.actualizarDoctor(this.doctor2,this.doctor))
        this.hospital.listarDoctores()

    }

}
let app=new Main();
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarPacienteAsegurado();
app.probarHospital();





