import React, { useEffect, useState } from 'react';
import { getAllSquads } from '../../../services/api';
import {
  ContainerLoadingSquads,
  TextLoadingSquads,
} from '../../Main/SquadsSection/styles';
import SquadsLimitedCard from './SquadsLimitedCard';

import {
  ContainerFourSquads,
  MainContent,
  ShortLine,
  SquadsSection,
  TitleContainer,
} from './styles';

function AnotherSquadsSection() {
  const [fourSquads, setFourSquads] = useState();
  const [numberRandons, setNumberRandons] = useState();
  useEffect(() => {
    const getFourSquads = async () => {
      const response = await getAllSquads();
      const responseSquads = await response.data;
      setFourSquads(responseSquads);
    };
    getFourSquads();
  }, []);

  useEffect(() => {
    const getNumber = () => {
      const numberRandom = Math.floor(Math.random() * 14);
      const numberRandomTwo = numberRandom + 4;
      setNumberRandons({ valueOne: numberRandom, valueTwo: numberRandomTwo });
    };
    getNumber();
  }, []);

  return (
    <SquadsSection id="anothersquads">
      {fourSquads && numberRandons ? (
        <MainContent>
          <ShortLine />
          <TitleContainer>
            <h1>Conheça Outros Squads</h1>
          </TitleContainer>
          <ContainerFourSquads>
            {fourSquads
              .slice(numberRandons.valueOne, numberRandons.valueTwo)
              .map((item) => (
                <SquadsLimitedCard key={item.id} squads={item} />
              ))}
          </ContainerFourSquads>
        </MainContent>
      ) : (
        <div>
          <ContainerLoadingSquads>
            <TextLoadingSquads>Carregando...</TextLoadingSquads>
          </ContainerLoadingSquads>
        </div>
      )}
    </SquadsSection>
  );
}

export default AnotherSquadsSection;
