import React from 'react';
import PropTypes from 'prop-types';
import { Card, Cards, ImgCards, TextCards } from '../CardStyles';
import iconsCarrousel from '../../../../assets/icons/iconsCarrousel';

const CardCarrousel = ({ data, index }) => {
  const urls = iconsCarrousel.map((item) => item.src);
  const textos = iconsCarrousel.map((item) => item.texto);
  return (
    <Card>
      <Cards>
        <ImgCards
          src={urls[index]}
          alt={`${data.nome}`}
          title={`Pecege ${data.nome}`}
        />
      </Cards>
      <TextCards>{`${data.numero} ${textos[index]}`}</TextCards>
    </Card>
  );
};

CardCarrousel.propTypes = {
  data: PropTypes.shape({
    nome: PropTypes.string,
    numero: PropTypes.number,
  }).isRequired,

  index: PropTypes.string.isRequired,
};

export default CardCarrousel;
