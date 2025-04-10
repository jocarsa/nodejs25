import React from 'react';
import './MensajeInput.css';

const MensajeInput = ({ inputMensaje, setInputMensaje, enviarMensaje }) => {
  return (
    <input
      type="text"
      placeholder="Escribe un mensaje y pulsa Enter"
      value={inputMensaje}
      onChange={e => setInputMensaje(e.target.value)}
      onKeyUp={enviarMensaje}
    />
  );
};

export default MensajeInput;