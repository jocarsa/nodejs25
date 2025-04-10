const http = require('http');

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let personas = [];

http.createServer((peticion, respuesta) => {
    // Encabezados CORS
    respuesta.setHeader('Access-Control-Allow-Origin', '*');
    respuesta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    respuesta.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Si la petición es OPTIONS, responder sin contenido
    if (peticion.method === 'OPTIONS') {
        respuesta.writeHead(204);
        respuesta.end();
        return;
    }

    personas.push(new Persona("Jose Vicente", 46));
    let cadena = JSON.stringify(personas);
    
    respuesta.writeHead(200, { 'Content-Type': 'application/json' });
    respuesta.write(cadena);
    respuesta.end();
}).listen(3000);

console.log('El servidor está corriendo en http://localhost:3000/');
