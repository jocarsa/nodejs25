const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, "mensajes.json");

let mensajes = [];

// Cargar mensajes si existe el archivo
if (fs.existsSync(FILE_PATH)) {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf-8");
        mensajes = JSON.parse(data);
        console.log("Mensajes cargados desde mensajes.json");
    } catch (err) {
        console.error("Error leyendo mensajes.json:", err);
    }
}

// Middleware
app.use(cors());
app.use(express.json());

// Guardar mensajes periódicamente cada 10 segundos
setInterval(() => {
    fs.writeFile(FILE_PATH, JSON.stringify(mensajes, null, 2), (err) => {
        if (err) {
            console.error("Error guardando mensajes:", err);
        } else {
            console.log("Mensajes guardados en mensajes.json");
        }
    });
}, 10000);

// Ruta para recibir nuevos mensajes
app.post("/envia", (req, res) => {
    const { mensaje, usuario, fecha } = req.body;

    if (!mensaje || !usuario || !fecha) {
        return res.status(400).json({ error: "Faltan datos del mensaje" });
    }

    mensajes.push({ mensaje, usuario, fecha });

    // Limitar a los últimos 100 mensajes
    if (mensajes.length > 100) {
        mensajes = mensajes.slice(-100);
    }

    res.sendStatus(200);
});

// Ruta para enviar los mensajes al frontend
app.get("/recibe", (req, res) => {
    res.json(mensajes);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de chat activo en http://localhost:${PORT}`);
});
