import React, { useEffect, useState } from 'react';
import Mensaje from './components/Mensaje';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [inputMensaje, setInputMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  const fetchMensajes = async () => {
    const res = await fetch('http://localhost:3000/recibe');
    const data = await res.json();
    setMensajes(data);
  };

  useEffect(() => {
    fetchMensajes();
    const interval = setInterval(fetchMensajes, 1000);
    return () => clearInterval(interval);
  }, []);

  const enviarMensaje = async (e) => {
    if (e.key === 'Enter' && usuario.trim() && inputMensaje.trim()) {
      const nuevoMensaje = {
        mensaje: inputMensaje,
        usuario: usuario,
        fecha: new Date().toISOString().slice(0, 19).replace('T', ' ')
      };

      await fetch('http://localhost:3000/envia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoMensaje)
      });

      setInputMensaje('');
    }
  };

  return (
    <div className="App">
      <Header usuario={usuario} setUsuario={setUsuario} />
      <main>
        <section>
          {mensajes.map((m, i) => (
            <Mensaje
              key={i}
              mensaje={m.mensaje}
              usuario={m.usuario}
              fecha={m.fecha}
            />
          ))}
        </section>
      </main>
      <Footer
        inputMensaje={inputMensaje}
        setInputMensaje={setInputMensaje}
        enviarMensaje={enviarMensaje}
      />
    </div>
  );
};

export default App;
