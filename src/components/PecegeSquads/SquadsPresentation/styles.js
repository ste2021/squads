import styled from 'styled-components';
import { shade, rgba } from 'polished';

const Container = styled.section`
  padding-top: 120px;
`;

const ContainerImageAndMessage = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerImage = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${rgba('#d8004c', 0.8)};
    mix-blend-mode: darken;
  }
`;

const ImageSquad = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContainerText = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  max-width: 450px;
  flex-direction: column;
  padding-left: 20%;
  @media screen and (max-width: 768px) {
    padding: 0px 10%;
    left: 5px;
  }
`;

const TitleTop = styled.h1`
  text-transform: uppercase;
  font: normal normal bold 24px/68px Poppins-Bold;
  color: #ee7062;
`;

const TextContent = styled.p`
  font: normal normal bold 80px/76px Poppins-Bold;
  color: #ffffff;
  span {
    color: #d8004c;
  }
`;

const ContainerButton = styled.div``;

const Button = styled.button`
  font: normal normal bold 16px/19px Helvetica;
  width: 142px;
  height: 44px;
  border: 0;
  text-transform: uppercase;
  background: #ee7062 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #ffffff;
  transition: background-color 300ms;
  :hover {
    cursor: pointer;
    background: ${shade(0.25, '#ee7062')};
  }
`;

export {
  Container,
  ContainerImageAndMessage,
  ContainerImage,
  ImageSquad,
  ContainerText,
  TitleTop,
  TextContent,
  ContainerButton,
  Button,
};
