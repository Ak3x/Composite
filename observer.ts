//notificar
// Clase que abstrae a los observadores
abstract class AlumnoIS2
{
    abstract recibirNotificacion()
}

class Maximo extends AlumnoIS2
{
    recibirNotificacion()
    {
        console.log("Apunta en un papelito")
    }
}

class Javier extends AlumnoIS2
{
    recibirNotificacion()
    {
        console.log("Apunta en bloc de notas")
    }
}

class Alexander extends AlumnoIS2
{
    recibirNotificacion()
    {
        console.log("Se lo memoriza")
    }
}

//observado
class Profesor 
{
    alumnos : AlumnoIS2[] | null = null
    addObservador(obs : AlumnoIS2)
    {
        if(this.alumnos == null)
        {
            this.alumnos = []
        }
        this.alumnos.push(obs)
    }
    tocarCabeza()
    {
        if (this.alumnos != null)
        {
            for(let i = 0; i < this.alumnos.length; i++)
            {
                let alu : AlumnoIS2 = this.alumnos[i]
                alu.recibirNotificacion()
            }
        }
    }
}
let mainObserver = () => {
    //1. Definir observador del observado

    let prof = new Profesor()
    let m = new Maximo()
    let j = new Javier()
    let a = new Alexander()

    prof.addObservador(m)
    prof.addObservador(j)
    prof.addObservador(a)

    //2. Suceda el evento
    prof.tocarCabeza()

}

mainObserver()