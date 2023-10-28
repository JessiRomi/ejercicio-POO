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
    constructor(apellido,nombre, dni, fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo,numero_legajo){ // en el constructor se agrega el nombre de la clase persona para ser llamada.
       Empleado.#id++;
        super(apellido,nombre,dni,fecha_nacimiento,estado_civil) 
        //con el super () se llama al contructor de la clase padre
        this.#numero_legajo = numero_legajo;
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

}
/*.................FIN DE LA CLASE EMPLEADO.............................*/ 
/*..........................COMIENZO DE LA CLASE JEFATURA................*/

class Jefatura extends Empleado {
constructor(apellido,nombre,dni,fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo){
super(apellido,nombre,dni,fecha_nacimiento,estado_civil,fecha_de_alta,sueldo_base,puesto_de_trabajo)
}

}


let laPersona = new Persona("Aravena","Gastón","44705734","10/28/2003","soltero");

console.log(laPersona.obtenerEdad())