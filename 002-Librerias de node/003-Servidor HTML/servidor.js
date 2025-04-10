const http = require('http');
const fs = require('fs');
const path = require('path');

const leerArchivo = (ruta, respuesta) => {
  fs.readFile(ruta, 'utf8', (err, contenido) => {
    if (err) {
      respuesta.statusCode = 500;
      respuesta.end('Error interno del servidor');
    } else {
      respuesta.write(contenido);
    }
  });
};

const server = http.createServer((peticion, respuesta) => {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });

  // Leer cabecera
  leerArchivo(path.join(__dirname, 'public/cabecera.html'), respuesta);

  // Leer contenido según la ruta
  if (peticion.url === '/') {
    leerArchivo(path.join(__dirname, 'public/index.html'), respuesta);
  } else if (peticion.url === '/sobremi') {
    leerArchivo(path.join(__dirname, 'public/sobremi.html'), respuesta);
  } else {
    respuesta.statusCode = 404;
    respuesta.write('<p>404 Not Found</p>');
  }

  // Terminar la respuesta después de un pequeño delay para asegurarse que los archivos se leen primero
  setTimeout(() => respuesta.end(), 50);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en: http://localhost:3000/');
});
