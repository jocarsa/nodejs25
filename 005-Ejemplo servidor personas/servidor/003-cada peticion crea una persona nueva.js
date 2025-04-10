const http = require('http');

class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }
}

let personas = [];

http.createServer((peticion, respuesta) => {
    
    personas.push(new Persona("Jose Vicente",46));
    let cadena = JSON.stringify(personas);
    
  respuesta.write(cadena);
  respuesta.end();
}).listen(3000);

console.log('El servidor está corriendo en http://localhost:3000/');