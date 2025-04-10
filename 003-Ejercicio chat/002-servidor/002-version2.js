const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

let mensajes = [];

app.use(cors());
app.use(express.json());

app.post("/envia", (req, res) => {
    const { mensaje, usuario, fecha } = req.body;

    if (!mensaje || !usuario || !fecha) {
        return res.status(400).json({ error: "Faltan datos del mensaje" });
    }

    mensajes.push({ mensaje, usuario, fecha });

    // Limitar a los últimos 100 mensajes (opcional)
    if (mensajes.length > 100) {
        mensajes = mensajes.slice(-100);
    }

    res.sendStatus(200);
});

app.get("/recibe", (req, res) => {
    res.json(mensajes);
});

app.listen(PORT, () => {
    console.log(`Servidor de chat activo en http://localhost:${PORT}`);
});
