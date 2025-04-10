const fs = require('fs');

fs.writeFile('archivo.txt', 'Hola mundo', (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo escrito correctamente.');
  }
});