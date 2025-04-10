const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>La web de Jose Vicente</h1>
    <a href="/">Inicio</a>
    <a href="/sobremi">Sobre Mi</a>
    <p>Esta es la pagina de inicio</p>
  `);
});

app.get('/sobremi', (req, res) => {
  res.send(`
    <h1>La web de Jose Vicente</h1>
    <a href="/">Inicio</a>
    <a href="/sobremi">Sobre Mi</a>
    <p>Esta es la pagina de sobre mi</p>
  `);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>La web de Jose Vicente</h1>
    <a href="/">Inicio</a>
    <a href="/sobremi">Sobre Mi</a>
    <p>404 Not Found</p>
  `);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en: http://localhost:3000/');
});
