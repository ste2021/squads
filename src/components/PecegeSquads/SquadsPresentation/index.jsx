import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerImage,
  ContainerImageAndMessage,
  ContainerText,
  ImageSquad,
  TextContent,
  TitleTop,
  Button,
  ContainerButton,
} from './styles';

import { getSquadInfos } from '../../../services/api';
import getImage from '../../../services/firebase';

const SquadsPresentation = ({ squadName }) => {
  const [squadInfo, setSquadInfo] = useState([]);
  const [squadImage, setSquadImage] = useState();

  useEffect(() => {
    const fetchSquadInfo = async () => {
      const recoveredSquads = await getSquadInfos(squadName);
      setSquadInfo(recoveredSquads.data);
    };

    fetchSquadInfo();
  }, []);

  useEffect(() => {
    const fetchImg = async () => {
      const url = await getImage(squadInfo.imgUrl);
      setSquadImage(url);
    };

    fetchImg();
  }, [squadInfo]);

  return (
    <Container id="squadspresentation">
      <ContainerImageAndMessage>
        <ContainerImage>
          <ImageSquad src={squadImage} />
        </ContainerImage>
        <ContainerText>
          <TitleTop>Squad</TitleTop>
          <TextContent>
            {squadInfo.nome}
            <span>.</span>
          </TextContent>
          <ContainerButton>
            <Button>Participar</Button>
          </ContainerButton>
        </ContainerText>
      </ContainerImageAndMessage>
    </Container>
  );
};

SquadsPresentation.propTypes = {
  squadName: PropTypes.string.isRequired,
};

export default SquadsPresentation;
