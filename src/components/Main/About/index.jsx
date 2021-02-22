import React from 'react';
import IMGAbout from '../../../assets/img/IMGAbout.svg';
import {
  BarTopSideAbout,
  ContainerAbout,
  ContainerImageAbout,
  ContainerMainAbout,
  ContainerTextAbout,
  ImageAbout,
  TextContainerAbout,
  TitleContainerAbout,
} from './styles';

const About = () => (
  <ContainerAbout id="about">
    <ContainerMainAbout>
      <ContainerImageAbout>
        <ImageAbout src={IMGAbout} alt="About" />
      </ContainerImageAbout>
      <ContainerTextAbout>
        <BarTopSideAbout />
        <TitleContainerAbout>Sobre o Squads</TitleContainerAbout>
        <TextContainerAbout>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </TextContainerAbout>
      </ContainerTextAbout>
    </ContainerMainAbout>
  </ContainerAbout>
);

export default About;
