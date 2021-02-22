import { useParams } from 'react-router-dom';
import React from 'react';
import SquadsPresentation from '../../components/PecegeSquads/SquadsPresentation';
import AboutSquads from '../../components/PecegeSquads/AboutSquads';
// import Schedule from '../../components/PecegeSquads/Schedule';
import AnotherSquadsSection from '../../components/PecegeSquads/AnotherSquadsSection';
import HeaderSquads from '../../components/PecegeSquads/HeaderSquads';
import FooterSquads from '../../components/PecegeSquads/FooterSquads';

function Squads() {
  const { name } = useParams();

  return (
    <>
      <HeaderSquads />
      <SquadsPresentation squadName={name} />
      <AboutSquads squadName={name} />
      {/* <Schedule /> */}
      <AnotherSquadsSection />
      <FooterSquads />
    </>
  );
}

export default Squads;
