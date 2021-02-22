import React, { useEffect, useState } from 'react';
import {
  CardsContainers,
  ContainerLoadingSquads,
  MainContent,
  ShortLine,
  SquadsContainer,
  TextLoadingSquads,
  TitleContainer,
} from './styles';
import SquadCard from '../../Shared/SquadCard';
import { getAllSquads } from '../../../services/api';

function SquadsSection() {
  const [squads, setSquads] = useState([{}]);
  const [loadingSquads, setLoadingSquads] = useState(true);

  useEffect(() => {
    const getSquads = async () => {
      const res = await getAllSquads();
      const recoveredSquads = res.data;

      if (res) {
        setSquads(recoveredSquads);
        setLoadingSquads(false);
      }
    };

    getSquads();
  }, []);

  return (
    <SquadsContainer id="squads">
      <MainContent>
        <ShortLine />
        <TitleContainer>
          <h1>Conheça os Squads</h1>
        </TitleContainer>
        <CardsContainers>
          {loadingSquads ? (
            <ContainerLoadingSquads>
              <TextLoadingSquads>Carregando...</TextLoadingSquads>
            </ContainerLoadingSquads>
          ) : (
            squads.map((squad) => <SquadCard key={squad.id} squad={squad} />)
          )}
        </CardsContainers>
      </MainContent>
    </SquadsContainer>
  );
}

export default SquadsSection;
