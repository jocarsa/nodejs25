import React from 'react';
import UsuarioInput from './UsuarioInput';
import './Header.css';

const Header = ({ usuario, setUsuario }) => {
  return (
    <header>
      <h1>Chat</h1>
      <UsuarioInput usuario={usuario} setUsuario={setUsuario} />
    </header>
  );
};

export default Header;