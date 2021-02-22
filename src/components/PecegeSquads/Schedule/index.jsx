import React from 'react';
import {
  ScheduleContainer,
  ScheduleSection,
  ShortLine,
  TitleContainer,
  AppointmentsContainer,
  Appointment,
} from './styles';

function Schedule() {
  return (
    <ScheduleSection id="schedulesquads">
      <ScheduleContainer>
        <ShortLine />
        <TitleContainer>
          <h1>Agenda</h1>
        </TitleContainer>
        <AppointmentsContainer>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
          <Appointment>
            <h3>24/05 - 10:00h</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Appointment>
        </AppointmentsContainer>
      </ScheduleContainer>
    </ScheduleSection>
  );
}

export default Schedule;
