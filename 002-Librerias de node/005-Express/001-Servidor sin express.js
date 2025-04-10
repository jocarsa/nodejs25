const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    respuesta.write(`
        <h1>La web de Jose Vicente</h1>
        <a href="/">Inicio</a>
        <a href="/sobremi">Sobre Mi</a>
    `);
  if (peticion.url === '/') {
    respuesta.write('Esta es la pagina de inicio');
  } else if (peticion.url === '/sobremi') {
    respuesta.write('Esta es la pagina de sobre mi');
  } else {
    respuesta.statusCode = 404;
    respuesta.write('404 Not Found');
  }
  respuesta.end();
});

server.listen(3000, () => {
  console.log('Servidor corriendo en: http://localhost:3000/');
});