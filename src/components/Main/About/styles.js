import styled from 'styled-components';

const BarTopSideAbout = styled.div`
  width: 107px;
  margin: 50px 0 30px 0;
  border-top: 4px solid #b20f54;
`;

const ContainerAbout = styled.div`
  display: flex;
  padding: 20px 50px;
  margin-top: 50px;
`;

const ContainerMainAbout = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerImageAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    margin-right: 50px;
  }
`;

const ImageAbout = styled.img`
  max-width: 80%;
  object-fit: contain;
`;

const ContainerTextAbout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleContainerAbout = styled.h1`
  font-family: 'Poppins-Bold';
  font-size: 84px;
  color: #707070;
  padding-bottom: 50px;
`;

const TextContainerAbout = styled.p`
  font: normal normal normal 16px/28px Helvetica;
  color: #707070;
  max-width: 540px;
`;

export {
  BarTopSideAbout,
  ContainerAbout,
  ContainerImageAbout,
  ContainerMainAbout,
  ContainerTextAbout,
  ImageAbout,
  TextContainerAbout,
  TitleContainerAbout,
};
