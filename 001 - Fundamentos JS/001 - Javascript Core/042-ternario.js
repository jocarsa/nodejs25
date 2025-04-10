class Persona{
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
      }
    getEdad(){
        return this.#edad;
    }
    setEdad(nuevaedad){

        if(nuevaedad == this.#edad + 1){
           this.#edad = nuevaedad;
           return true
        }else{
           return false;
        }
    }
}

let persona1 = new Persona("Jose Vicente",46);
console.table(persona1);
console.log(persona1.edad)
console.log(persona1.getEdad())
persona1.setEdad(49) ? console.log("ok") : console.log("ko");
console.log(persona1.getEdad())