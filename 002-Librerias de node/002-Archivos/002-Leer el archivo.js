const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, datos) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:', datos);
  }
});