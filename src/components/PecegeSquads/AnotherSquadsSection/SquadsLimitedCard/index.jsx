import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import getImage from '../../../../services/firebase';
import {
  ImgContainer,
  ImgSubtitlesContainer,
  SquadsCard,
} from '../../../Shared/SquadCard/styles';

function SquadsLimitedCard({ squads }) {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImg = async () => {
      const url = await getImage(squads.imgUrl);
      setImage(url);
    };
    fetchImg();
  }, []);

  return (
    <SquadsCard>
      {console.log(squads)}
      <ImgContainer>
        <img alt={squads.nome} src={image} />
      </ImgContainer>
      <ImgSubtitlesContainer>
        <span>Pecege</span>
        <p>{squads.nome.replace('Pecege', '')}</p>
      </ImgSubtitlesContainer>
    </SquadsCard>
  );
}
SquadsLimitedCard.defaultProps = {
  squads: {},
};
SquadsLimitedCard.propTypes = {
  squads: PropTypes.objectOf(PropTypes.any),
};
export default SquadsLimitedCard;
