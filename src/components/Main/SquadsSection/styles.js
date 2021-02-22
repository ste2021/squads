import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SquadsContainer = styled.section`
  background: #9e215d;
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.div`
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin-bottom: 126px;
`;

export const ShortLine = styled.div`
  border-top: 4px solid #ee7062;
  width: 107px;
  margin: 127px 0 20px;
`;

export const TitleContainer = styled.div`
  h1 {
    color: #fff;
    font-family: 'Poppins-Bold';
    font-size: 64px;
    margin-bottom: 60px;
    text-align: center;
  }
`;

export const CardsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SquadsCard = styled.div`
  margin: 20px;
  background: #707070;
  border-radius: 15px;
  box-shadow: 0px 5px 7px #840b3e;
`;

export const ImgContainer = styled(Link)`
  img {
  }
`;

export const ImgSubtitlesContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Helvetica;
  font-size: 18px;
  font-weight: 100;
  color: #fff;

  span {
    margin-right: 7px;
  }

  p {
    font-weight: 700;
  }
`;

export const ContainerLoadingSquads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const TextLoadingSquads = styled.h1`
  font-family: Poppins-Bold;
  font-size: 30px;
  color: #fff;
`;
