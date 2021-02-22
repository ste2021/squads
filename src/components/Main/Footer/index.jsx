import React from 'react';
import Footer from '../../Shared/Footer';

// eslint-disable-next-line react/prop-types
const FooterMain = ({ id }) => (
  <Footer
    id={id}
    firstParamFooter="homepageandmessage"
    secondParamFooter="about"
    thirdParamFooter="carousel"
    fourthParamFooter="squads"
    firstTextFooter="Inicio"
    secondTextFooter="Sobre"
    thirdTextFooter="Estatísticas"
    fourthTextFooter="Squads"
  />
);

export default FooterMain;
