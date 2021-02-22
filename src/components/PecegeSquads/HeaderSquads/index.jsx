import React from 'react';
import MenuHamburguer from '../../Shared/MenuHamburguer';
import NavTop from '../../Shared/NavTop';
import { Nav, NavBtn, NavBtnLinkSquads } from '../../Shared/NavTop/styles';

function HeaderSquads() {
  return (
    <Nav id="headersquads">
      <MenuHamburguer
        first="Inicio"
        second="Sobre"
        thirt="Atividades"
        forthy="Agenda"
        fifthen="Conheça outros Squads"
        firstParam="squadspresentation"
        secondParam="knowsquad"
        thirtParam="activitysquads"
        forthyParam="schedulesquads"
        fifthenParam="anothersquads"
      />
      <NavTop
        firstParamNav="squadspresentation"
        secondParamNav="knowsquad"
        thirdParamNav="activitysquads"
        fourthParamNav="schedulesquads"
        fifthenParamNav="anothersquads"
        firstTextNav="Início"
        secondTextNav="Sobre"
        thirdTextNav="Atividades"
        fourthTextNav="Agenda"
        fifthenTextNav="Conheça outros Squads"
      />
      <NavBtn>
        <NavBtnLinkSquads
          spy
          smooth
          offset={0}
          to={{
            pathname: '/',
            state: {
              load: true,
            },
          }}
        >
          Participar
        </NavBtnLinkSquads>
      </NavBtn>
    </Nav>
  );
}

export default HeaderSquads;
