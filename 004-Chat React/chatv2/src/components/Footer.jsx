import React from 'react';
import MensajeInput from './MensajeInput';
import './Footer.css';

const Footer = ({ inputMensaje, setInputMensaje, enviarMensaje }) => {
  return (
    <footer>
      <MensajeInput
        inputMensaje={inputMensaje}
        setInputMensaje={setInputMensaje}
        enviarMensaje={enviarMensaje}
      />
    </footer>
  );
};

export default Footer;