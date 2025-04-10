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
            this.#edad = nuevaedad;
    }
}

let persona1 = new Persona("Jose Vicente",46);
console.table(persona1);
console.log(persona1.edad)
console.log(persona1.getEdad())
persona1.setEdad(47);
console.log(persona1.getEdad())