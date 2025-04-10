import React from 'react';
import './UsuarioInput.css';

const UsuarioInput = ({ usuario, setUsuario }) => {
  return (
    <input
      type="text"
      placeholder="Tu nombre"
      value={usuario}
      onChange={e => setUsuario(e.target.value)}
    />
  );
};

export default UsuarioInput;