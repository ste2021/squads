import { Link } from 'react-scroll';
import styled from 'styled-components';

const ContainerImageAndMessage = styled.section`
  display: flex;
  padding: 180px 50px 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    order: 1;
  }
`;
const ContainerMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    order: 2;
    margin-top: 50px;
  }
`;

const ContainerTitleSquads = styled.div`
  background: #fff;
  order: 1;
  display: flex;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const TitleTextSquads = styled.h1`
  font-family: 'Poppins-Bold';
  font-size: 80px;
  letter-spacing: 0px;
  color: #707070;

  span {
    color: #d8004c;
  }
`;

const ContainerTextSquads = styled.div`
  display: flex;
  order: 2;
  padding-top: 55px;
  max-width: 330px;
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;
const TextSquadsContainer = styled.p`
  text-align: left;
  font: normal normal normal 20px/28px Helvetica;
  letter-spacing: 0px;
  color: #707070;
`;

const ImgHeader = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const ContainerBTNSquads = styled.nav`
  display: flex;
  margin-top: 30px;
  order: 3;
`;

const BTNSquads = styled(Link)`
  border-radius: 4px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  background: #b20f54;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font: normal normal bold 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #fff;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d61567;
  }
`;

export {
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
};
