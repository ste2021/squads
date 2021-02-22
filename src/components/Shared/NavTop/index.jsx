import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, NavMenu } from './styles';

function NavTop({
  firstParamNav,
  secondParamNav,
  thirdParamNav,
  fourthParamNav,
  fifthenParamNav,
  firstTextNav,
  secondTextNav,
  thirdTextNav,
  fourthTextNav,
  fifthenTextNav,
}) {
  return (
    <NavMenu>
      <NavLink to={firstParamNav} spy smooth offset={-70} duration={500}>
        {firstTextNav}
      </NavLink>
      <NavLink to={secondParamNav} spy smooth offset={-70} duration={500}>
        {secondTextNav}
      </NavLink>
      <NavLink to={thirdParamNav} spy smooth offset={-70} duration={500}>
        {thirdTextNav}
      </NavLink>
      <NavLink to={fourthParamNav} spy smooth offset={-70} duration={500}>
        {fourthTextNav}
      </NavLink>
      {fifthenParamNav ? (
        <NavLink to={fifthenParamNav} spy smooth offset={-70} duration={500}>
          {fifthenTextNav}
        </NavLink>
      ) : null}
    </NavMenu>
  );
}
NavTop.defaultProps = {
  firstParamNav: '',
  secondParamNav: '',
  thirdParamNav: '',
  fourthParamNav: '',
  firstTextNav: '',
  secondTextNav: '',
  thirdTextNav: '',
  fourthTextNav: '',
  fifthenParamNav: '',
  fifthenTextNav: '',
};

NavTop.propTypes = {
  firstParamNav: PropTypes.string,
  secondParamNav: PropTypes.string,
  thirdParamNav: PropTypes.string,
  fourthParamNav: PropTypes.string,
  firstTextNav: PropTypes.string,
  secondTextNav: PropTypes.string,
  thirdTextNav: PropTypes.string,
  fourthTextNav: PropTypes.string,
  fifthenParamNav: PropTypes.string,
  fifthenTextNav: PropTypes.string,
};

export default NavTop;
