import styled from 'styled-components';

const AboutSection = styled.section.attrs({ id: 'knowsquad' })`
  display: flex;
  flex-direction: column;
`;

const MeetTop = styled.div`
  margin-bottom: 6%;
  width: 107px;
  background-color: #b20f54;
  height: 04px;
  padding: 0 0 04px 0;
`;

const MeetSquadsFather = styled.section`
  color: #707070;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 100%;
    margin-bottom: 10%;
    flex-direction: column;
  }
`;
const TextContainerMeet = styled.article`
  float: right;
  display: flex;
  width: 635px;
  height: 240px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const TittleMeetSquads = styled.h1`
  font-size: 54px;
  font-family: 'Poppins-Bold';
  text-align: left;
  justify-content: left;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 10px;
  }
`;
const MeetSquadsDiv = styled.div`
  display: flex;
  text-align: left;
  color: #707070;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextMeetSquads = styled.article`
  font: normal normal normal 16px 'Poppins-Light';

  margin: 30px 0 0 0;
  @media screen and (max-width: 1000px) {
    margin: 20px 150px 0px 0px;
    font-size: 30px;

    text-align: start;
  }
`;

const ImageMeetSquads = styled.div`
  margin: 60px 0 0 50px;
  position: relative;
  width: 537px;
  height: 457px;

  @media screen and (max-width: 1000px) {
    margin: 0px 10px 0 0px;
    width: 500px;
    height: auto;
  }
`;
const ImageMeet = styled.img`
  float: left;
  object-fit: contain;
  margin: 40px 0 0 0;

  @media screen and (max-width: 490px) {
    display: inline;
  }
`;

export {
  AboutSection,
  MeetSquadsDiv,
  TextMeetSquads,
  TittleMeetSquads,
  ImageMeetSquads,
  ImageMeet,
  MeetTop,
  TextContainerMeet,
  MeetSquadsFather,
};
