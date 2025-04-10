const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

// Almacenamos los mensajes en memoria
let mensajes = [];

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para recibir nuevos mensajes
app.post("/envia", (req, res) => {
    const nuevoMensaje = {
        fecha: new Date().toISOString().split("T")[0],
        usuario: "Usuario", // Puedes personalizar esto si implementas usuarios
        texto: req.body.mensaje
    };
    mensajes.push(nuevoMensaje);
    res.sendStatus(200);
});

// Ruta para enviar los mensajes al frontend
app.get("/recibe", (req, res) => {
    res.json(mensajes);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de chat funcionando en http://localhost:${PORT}`);
});
