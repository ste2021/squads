import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css';
import React, { useEffect, useState } from 'react';
import CardCarrousel from './CardCarrousel';
import {
  getDataForCarrousel,
  getNumbersForCarrousel,
} from '../../../services/api';
import { ContainerLoading, TextLoading } from './CardStyles';

const CarouselDiv = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);

  useEffect(() => {
    const getDataOfCarrousel = async () => {
      const resp = await getDataForCarrousel();
      const dados = await Promise.all(resp.map((item) => item?.nome));
      const setNewResult = await Promise.all(
        dados.map(async (item) => {
          const getdados = await getNumbersForCarrousel(`${item}/sum`);
          return {
            nome: item,
            numero: getdados?.data,
          };
        }),
      );
      setDataCarrousel(setNewResult);
    };
    getDataOfCarrousel();
  }, []);

  return (
    <div>
      {dataCarrousel.length > 1 ? (
        <div className="Container" id="carousel">
          <div className="top" />
          <p className="text">Estatísticas do Ano</p>
          <Carousel
            arrows
            centered
            infinite
            dots
            draggable
            slidesPerPage={5}
            breakpoints={{
              1250: { slidesPerPage: 4, centered: false },
              925: { slidesPerPage: 3, centered: false },
              750: { slidesPerPage: 2, centered: false },
              575: { slidesPerPage: 1, centered: false },
            }}
          >
            {dataCarrousel.map((item, index) => (
              <div key={index.toString()}>
                <CardCarrousel index={index.toString()} data={item} />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <ContainerLoading>
          <TextLoading>Carregando Carrousel...</TextLoading>
        </ContainerLoading>
      )}
    </div>
  );
};

export default CarouselDiv;
