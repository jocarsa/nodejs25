const express = require('express');
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello', message: 'Hello from Pug!' });
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
