abstract class RamaPC
{
    hijos : ComponentePc[] | null = null
    addComponente(comp : ComponentePc)
    {
        //Lazzy initialization
        if(this.hijos ==null)
        {
            this.hijos =[]
        }
        this.hijos.push(comp)
    }
}

interface ComponentePc
{
    calcularPrecio() : number
}

class Computador extends RamaPC implements ComponentePc
{
    
    calcularPrecio(): number 
    {
        let sumaPrecios = 0
        if(this.hijos != null)
        {
   
            for( let i=0; i<this.hijos.length;i++)
            {
                let precioHijos = this.hijos[1].calcularPrecio()
                sumaPrecios += precioHijos
            }
            
        }
        return sumaPrecios
    }
}

class Monitor implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 200
    }
}

class Mouse implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 20
    }
}

class Case extends RamaPC implements ComponentePc
{
    calcularPrecio(): number 
    {
        let sumaPrecios = 0
        if(this.hijos != null)
        {
   
            for( let i=0; i<this.hijos.length;i++)
            {
                let precioHijos = this.hijos[1].calcularPrecio()
                sumaPrecios += precioHijos
            }
            
        }
        return sumaPrecios
    }
}

class Teclado implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 20
    }
}

class Memoria implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 90
    }
}

class Placa implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 100
    }
}

class TarjetaGrafica implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 180
    }
}

class Disco implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 120
    }
}

class Procesador implements ComponentePc
{
    calcularPrecio(): number 
    {
        return 450
    }
}


let mainComposite = () => {

    //1. Definir Estructura
    let comp : Computador = new Computador() /////////////
    let monitor : ComponentePc = new Monitor()
    let teclado : ComponentePc = new Teclado()
    let mouse : ComponentePc = new Mouse()
    let c : Case = new Case()                /////////////
    let memoria : ComponentePc = new Memoria()
    let tg : ComponentePc = new TarjetaGrafica()
    let disco : ComponentePc = new Disco()
    let proc : ComponentePc = new Procesador()
    let placa : ComponentePc = new Placa()

    c.addComponente(memoria)
    c.addComponente(tg)
    c.addComponente(disco)
    c.addComponente(proc)
    c.addComponente(placa)

    comp.addComponente(monitor)
    comp.addComponente(teclado)
    comp.addComponente(mouse)
    comp.addComponente(c)


    //2. Ejecutar alguna accion sobre la estructura

    let precioTotal = comp.calcularPrecio()
    console.log(`El precio Total es : ${precioTotal}`)
}

mainComposite()