import React from 'react';

import { Container } from './styles';

import logoHeader from '../../../assets/logo-header.png';

const Header = () => {
  return (
    <Container>
      <img src={logoHeader} alt="TEDx Belo Horizonte" />
      <div>
        <div>Home</div>
        <div>Speakers</div>
        <div>Agenda</div>
        <div>Patrocinadores</div>
        <div>Tedxclusive</div>
        <div>Login</div>
      </div>

      <button>Registrar</button>
    </Container>
  );
};

export default Header;
