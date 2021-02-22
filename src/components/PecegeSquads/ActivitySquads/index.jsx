import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivitySection,
  ActivityTittle,
  ActivityText,
  SectionActivity,
  TopActivity,
} from './styles';

const ActivitySquads = ({ activities }) => (
  <div id="activitysquads">
    <SectionActivity>
      <ActivitySection>
        <TopActivity />
        <ActivityTittle>Atividades</ActivityTittle>
        <ActivityText>{activities}</ActivityText>
      </ActivitySection>
    </SectionActivity>
  </div>
);

ActivitySquads.propTypes = {
  activities: PropTypes.string.isRequired,
};

export default ActivitySquads;
