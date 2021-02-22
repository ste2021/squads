/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MenuHamburguer from '../../Shared/MenuHamburguer';
import NavTop from '../../Shared/NavTop';
import { Nav, NavBtn, NavBtnLinkMain } from '../../Shared/NavTop/styles';

function Header() {
  return (
    <Nav id="header">
      <MenuHamburguer
        first="Inicio"
        second="Sobre"
        thirt="Estatísticas"
        forthy="Squads"
        fifthen="Participar"
        firstParam="header"
        secondParam="about"
        thirtParam="carousel"
        forthyParam="squads"
        fifthenParam="squadsform"
      />
      <NavTop
        firstParamNav="homepageandmessage"
        secondParamNav="about"
        thirdParamNav="carousel"
        fourthParamNav="squads"
        firstTextNav="Início"
        secondTextNav="Sobre"
        thirdTextNav="Estatísticas"
        fourthTextNav="Squads"
      />
      <NavBtn>
        <NavBtnLinkMain to="squadsform" spy smooth offset={-70} duration={500}>
          Participar
        </NavBtnLinkMain>
      </NavBtn>
    </Nav>
  );
}

export default Header;
