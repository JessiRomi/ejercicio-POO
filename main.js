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
    set estado_civil(nuevo_estado_civil){
        this.#estado_civil = nuevo_estado_civil
    }
}
/*...................FIN DE LA CLASE PERSONA.....................................*/ 
/*...............COMIENZO DE LA CLASE EMPLEADO................................ */
class Empleado extends Persona{
    #fecha_de_alta;
    #sueldo_base;
    #puesto_de_trabajo;
    constructor(persona,fecha_de_alta,sueldo_base,puesto_de_trabajo){ // en el constructor se agrega el nombre de la clase persona para ser llamada.
        super(persona.apellido,persona.nombre,persona.dni,persona.fecha_nacimiento,persona.estado_civil) 
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

}
/*.................FIN DE LA CLASE EMPLEADO.............................*/ 
/*..........................COMIENZO DE LA CLASE JEFATURA................*/

