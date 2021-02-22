import React from 'react';
import {
  BTNSquads,
  ContainerBTNSquads,
  ContainerImage,
  ContainerImageAndMessage,
  ContainerMessage,
  ContainerTextSquads,
  ContainerTitleSquads,
  ImgHeader,
  TextSquadsContainer,
  TitleTextSquads,
} from './styles';
import IMGHeader from '../../../assets/img/IMGHeader.png';

const HomePageImageAndMessage = () => (
  <ContainerImageAndMessage id="homepageandmessage">
    <ContainerMessage>
      <div>
        <ContainerTitleSquads>
          <TitleTextSquads>
            Se quer ir longe, vá em grupo<span>.</span>
          </TitleTextSquads>
        </ContainerTitleSquads>
        <ContainerTextSquads>
          <TextSquadsContainer>
            O Pecege tem squads que são a sua cara. Faça parte dos seus
            favoritos, compartilhe conhecimento e obtenha muito mais.
          </TextSquadsContainer>
        </ContainerTextSquads>
        <ContainerBTNSquads>
          <BTNSquads to="squads" spy smooth offset={-70} duration={500}>
            Conhecer Squads
          </BTNSquads>
        </ContainerBTNSquads>
      </div>
    </ContainerMessage>
    <ContainerImage>
      <div>
        <ImgHeader src={IMGHeader} />
      </div>
    </ContainerImage>
  </ContainerImageAndMessage>
);

export default HomePageImageAndMessage;
