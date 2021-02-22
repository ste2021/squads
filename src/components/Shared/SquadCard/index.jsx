import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { ImgContainer, ImgSubtitlesContainer, SquadsCard } from './styles';
import getImage from '../../../services/firebase';

function SquadCard({ squad }) {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImg = async () => {
      const url = await getImage(squad.imgUrl);
      setImage(url);
    };
    fetchImg();
  }, []);

  return (
    <SquadsCard to={`/squad/${squad.nome}`}>
      <ImgContainer>
        <img alt={squad.nome} src={image} />
      </ImgContainer>
      <ImgSubtitlesContainer>
        <span>Pecege</span>
        <p>{squad.nome.replace('Pecege', '')}</p>
      </ImgSubtitlesContainer>
    </SquadsCard>
  );
}

SquadCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  squad: PropTypes.object.isRequired,
};
export default SquadCard;
