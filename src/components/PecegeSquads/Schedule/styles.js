import styled from 'styled-components';
import background from '../../../assets/img/squadsBg.png';

export const ScheduleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #9e215d;
`;

export const ScheduleContainer = styled.div`
  height: 600px;
  width: 95%;
  background: url(${background}) center no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
`;

export const ShortLine = styled.div`
  border-top: 4px solid #ee7062;
  width: 107px;
  margin: 60px 0 20px;
`;

export const TitleContainer = styled.div`
  h1 {
    color: #fff;
    font-family: 'Poppins-Bold';
    font-size: 48px;
    margin-bottom: 60px;
  }
`;

export const AppointmentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  color: #ff8b7e;
  font-family: 'Poppins-Bold';
  font-size: 18px;
  max-width: 800px;
`;

export const Appointment = styled.div`
  font-size: 18px;

  h3 {
    font-family: 'Poppins-Bold';
    color: #ff8b7e;
    line-height: 45px;
  }

  p {
    font-family: 'Poppins-Regular';
    color: #fdf4f8;
  }
`;
