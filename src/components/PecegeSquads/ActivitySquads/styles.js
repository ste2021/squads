import styled from 'styled-components';

const TopActivity = styled.div`
  margin-bottom: 4%;
  width: 107px;
  background-color: #b20f54;
  height: 04px;
`;

const SectionActivity = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -05%;
  background-color: #fcfafa;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
    margin: auto;
  }
`;

const ActivityTittle = styled.h1`
  text-align: left;
  justify-content: left;
  font-size: 54px;
  font-family: 'Poppins-Bold';
  color: #707070;
  @media screen and (max-width: 1000px) {
    font-size: 35px;
    margin-bottom: 10px;
  }
`;

const ActivitySection = styled.article`
  margin: 0px 250px 100px 200px;

  font: normal normal normal 16px 'Poppins-Light';
  color: #707070;

  @media screen and (max-width: 1000px) {
    margin: 20px 150px 200px 50px;
  }
`;

const ActivityText = styled.article`
  margin: 30px 0 0 0;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
    text-align: justify;
  }
`;

export {
  SectionActivity,
  ActivitySection,
  ActivityTittle,
  ActivityText,
  TopActivity,
};
