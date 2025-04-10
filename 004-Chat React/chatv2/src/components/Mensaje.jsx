import React from 'react';
import './Mensaje.css';

const Mensaje = ({ mensaje, usuario, fecha }) => {
  return (
    <div className="mensaje">
      <time>{fecha}</time>
      <h4>{usuario}</h4>
      <p>{mensaje}</p>
    </div>
  );
};

export default Mensaje;