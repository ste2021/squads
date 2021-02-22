import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IMGAbout from '../../../assets/img/IMGAbout.svg';
import {
  AboutSection,
  MeetSquadsDiv,
  TextMeetSquads,
  TittleMeetSquads,
  ImageMeetSquads,
  ImageMeet,
  MeetTop,
  TextContainerMeet,
  MeetSquadsFather,
} from './styles';
import ActivitySquads from '../ActivitySquads';
import { getSquadInfos } from '../../../services/api';

function MeetSquads({ squadName }) {
  const [squadInfos, setSquadInfos] = useState([]);

  useEffect(() => {
    const fetchSquadInfos = async () => {
      const Infos = await getSquadInfos(squadName);
      setSquadInfos(Infos.data);
    };

    fetchSquadInfos();
  }, []);

  return (
    <AboutSection>
      <MeetSquadsFather>
        <MeetSquadsDiv>
          <TextContainerMeet>
            <MeetTop />
            <TittleMeetSquads>Conheça o Squad </TittleMeetSquads>
            <TextMeetSquads>{squadInfos.textoSquad}</TextMeetSquads>
          </TextContainerMeet>
          <ImageMeetSquads>
            <ImageMeet src={IMGAbout} alt="About" />
          </ImageMeetSquads>
        </MeetSquadsDiv>
      </MeetSquadsFather>
      <ActivitySquads activities={squadInfos.atividade} />
    </AboutSection>
  );
}

MeetSquads.propTypes = {
  squadName: PropTypes.string.isRequired,
};

export default MeetSquads;
