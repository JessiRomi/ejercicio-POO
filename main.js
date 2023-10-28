/*........................COMIENZO DE LA CLASE PERSONA.............................*/ 
class Persona {
    #apellido; // estas son las propiedades que va a tener la clase persona
    #nombre; // el # es la encapsulación, la hace privada por la que la oculta para su uso fuera de la clase.
    #dni;
    #fecha_nacimiento;
    #estado_civil;
    constructor (apellido,nombre,dni,fecha_nacimiento,estado_civil)//estos son los parametros que se le asignan a la clase persona
    {
        this.#apellido = apellido; // se le da el valor a la propiedad.
        this.#nombre = nombre;
        this.#dni = dni;
        this.#fecha_nacimiento = fecha_nacimiento;
        this.#estado_civil = estado_civil;
    }
    //..... Comienzan los get, los cuales permiten acceder a las propiedades privadas.

    get nombre(){
        return this.#nombre;
    }

    get apellido(){
        return this.#apellido;
    }
    get dni(){
        return this.#dni;
    }
    get fecha_nacimiento(){
        return this.#fecha_nacimiento;
    }
    
    get estado_civil(){
        return this.#estado_civil;
    } 

    set estado_civil(nuevo_estado_civil){
        this.#estado_civil = nuevo_estado_civil
    }

    obtenerEdad (){
        let hoy = new Date(Date.now());
        let fec_nac = new Date(Date.parse(this.#fecha_nacimiento));
        let edad = hoy.getFullYear() - fec_nac.getFullYear(); // getfullyear es una función de la clase date, que devuelve el año. 
        if(hoy.getMonth() < fec_nac.getMonth()){
            edad = edad - 1     
        }
        else if(hoy.getMonth() === fec_nac.getMonth()){
            if(hoy.getDate() < fec_nac.getDate()){
                edad = edad - 1;
            }
        }
        return edad;
    }
}
/*...................FIN DE LA CLASE PERSONA.....................................*/ 
/*...............COMIENZO DE LA CLASE EMPLEADO................................ */
class Empleado extends Persona{
    #fecha_de_alta;
    #sueldo_base;
    #puesto_de_trabajo;
    #numero_legajo;
    static #id = 0;
    constructor(apellido,nombre, dni, fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo){ // en el constructor se agrega el nombre de la clase persona para ser llamada.
       Empleado.#id++;
        super(apellido,nombre,dni,fecha_nacimiento,estado_civil) 
        //con el super () se llama al contructor de la clase padre
        this.#fecha_de_alta = fecha_de_alta;
        if(sueldo_base>0){
            this.#sueldo_base = sueldo_base;
        }
        else{
            alert("Su sueldo no puede ser negativo, se configurará con el valor de 1, luego cambielo.")
            this.sueldo_base = 1
        }
        this.#puesto_de_trabajo = puesto_de_trabajo;
        this.#numero_legajo = Empleado.#id;
    }

    set sueldo_base(nuevo_sueldo){
        if(nuevo_sueldo>this.sueldo_base){
            this.#sueldo_base = nuevo_sueldo;
        }
        else{
            alert("El sueldo no puede ser menos de su sueldo actual")
        }
        
    }

    set puesto_de_trabajo(nuevo_puesto){
        this.#puesto_de_trabajo = nuevo_puesto;
    }

    aumentar_sueldo (porcentaje_de_aumento){
        if(porcentaje_de_aumento>0 && porcentaje_de_aumento<=100){
            this.#sueldo_base = this.#sueldo_base * (1 + porcentaje_de_aumento/100)
            // este metodo se utiliza para sacar un nuevo sueldo, según el porcentaje ingresado. 
        }
        else {
            alert("El porcentaje debe estar entre 0 y 100.");
        }

    }
    get fecha_de_alta(){
        return this.#fecha_de_alta;
    }
    get sueldo_base(){
        return this.#sueldo_base;
    }
    get puesto_de_trabajo(){
        return this.#puesto_de_trabajo;
    }
    get numero_legajo(){
        return this.#numero_legajo;
    }

}
/*.................FIN DE LA CLASE EMPLEADO.............................*/ 
/*..........................COMIENZO DE LA CLASE JEFATURA................*/

class Jefatura extends Empleado {
constructor(apellido,nombre,dni,fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo){
super(apellido,nombre,dni,fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo)
}
nueva_tarea (nueva_tarea,empleado){
    console.log(`El ${this.puesto_de_trabajo} ha decidido delegar la tarea de ${nueva_tarea} a ${empleado.apellido} ${empleado.nombre}`)
}

}
var empleados= [
    new Empleado ("Aravena","Gastón","44705734","03/30/2003","soltero","10/20/2022",100000,"obrero"),
    new Empleado ("Conejero", "Romina","31359234","02/13/1985","soltera","04/20/2017",150000,"obrero"),
    new Jefatura ("Millahual","Victor","34243678","03/18/1989","divorciado","03/15/2019",250000,"jefe de RRHH")
]

function crear(){
    let apellido = document.getElementById("apellido");
    let nombre = document.getElementById("nombre");
    let dni = document.getElementById("dni");
    let fecha_nacimiento = document.getElementById("fecha_nacimiento");
    let estado_civil = document.getElementById("estado_civil");
    let fecha_de_alta = document.getElementById("fecha_alta");
    let sueldo_base = document.getElementById("sueldo");
    let puesto_de_trabajo = document.getElementById("puesto_trabajo");
    if(apellido.value != "" && nombre.value != "" && dni.value != "" && fecha_nacimiento !="" && estado_civil.value != "" && fecha_de_alta.value != "" && sueldo_base.value != "" && puesto_de_trabajo.value != ""){
        let miPersona = new Persona (apellido.value,nombre.value,dni.value,fecha_nacimiento.value,estado_civil.value)
        if(puesto_de_trabajo.value.includes("jefe")){
            empleados.push(new Jefatura(apellido.value,nombre.value,dni.value,fecha_nacimiento.value,estado_civil.value,fecha_de_alta.value,sueldo_base.value,puesto_de_trabajo.value));
        }
        else{
            empleados.push(new Empleado(apellido.value,nombre.value,dni.value,fecha_nacimiento.value,estado_civil.value,fecha_de_alta.value,sueldo_base.value,puesto_de_trabajo.value));
        }
        alert("Empleado Agregado");
        apellido.value ="";
        nombre.value ="";
        dni.value = "";
        fecha_nacimiento.value= "";
        estado_civil.value = "";
        fecha_de_alta.value ="";
        sueldo_base.value ="";
        puesto_de_trabajo.value="";
    }

    else{
        alert("No deben quedar campos vacios, completar");
    }
}


function mostrarEmpleados(){
    empleados.forEach(
        empleado => {
            console.log(empleado)
        }
        )
    }
    
    
    var btn_crear = document.getElementById("crear");
    
    btn_crear.addEventListener("click", (e)=>{
        e.preventDefault();
        crear();
    })

    var btn_mostrar = document.getElementById("mostrar");
    
    btn_mostrar.addEventListener("click", ()=>{
        mostrarEmpleados();
    })