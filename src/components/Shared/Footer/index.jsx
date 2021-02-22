import React from 'react';
import { PropTypes } from 'prop-types';
import LogoPecege from '../../../assets/img/LogoPecege.svg';
import Logotipo from '../../../assets/img/Logotipo.svg';

import {
  ContainerBarTopSideFotter,
  ContainerFooter,
  ContainerLogoPecege,
  ContainerLogoSquads,
  MenuFotter,
  ItemMenuFotter,
  LinkMenuFotter,
  BarTopSideFotter,
} from './styles';

function Footer({
  firstParamFooter,
  secondParamFooter,
  thirdParamFooter,
  fourthParamFooter,
  fifthenParamFooter,
  firstTextFooter,
  secondTextFooter,
  thirdTextFooter,
  fourthTextFooter,
  fifthenTextFooter,
}) {
  return (
    <section id="footer">
      <ContainerBarTopSideFotter>
        <BarTopSideFotter />
      </ContainerBarTopSideFotter>
      <ContainerFooter>
        <ContainerLogoPecege>
          <img src={LogoPecege} alt="Logo Pecege" />
        </ContainerLogoPecege>
        <ContainerLogoSquads>
          <img src={Logotipo} alt="Logo Squads" />
        </ContainerLogoSquads>
        <MenuFotter>
          <ItemMenuFotter>
            <LinkMenuFotter
              to={firstParamFooter}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {firstTextFooter}
            </LinkMenuFotter>
          </ItemMenuFotter>
          <ItemMenuFotter>
            <LinkMenuFotter
              to={secondParamFooter}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {secondTextFooter}
            </LinkMenuFotter>
          </ItemMenuFotter>
          <ItemMenuFotter>
            <LinkMenuFotter
              to={thirdParamFooter}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {thirdTextFooter}
            </LinkMenuFotter>
          </ItemMenuFotter>
          <ItemMenuFotter>
            <LinkMenuFotter
              to={fourthParamFooter}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {fourthTextFooter}
            </LinkMenuFotter>
          </ItemMenuFotter>
          {fifthenParamFooter ? (
            <ItemMenuFotter>
              <LinkMenuFotter
                to={fifthenParamFooter}
                spy
                smooth
                offset={-70}
                duration={500}
              >
                {fifthenTextFooter}
              </LinkMenuFotter>
            </ItemMenuFotter>
          ) : null}
        </MenuFotter>
      </ContainerFooter>
    </section>
  );
}

Footer.defaultProps = {
  firstParamFooter: '',
  secondParamFooter: '',
  thirdParamFooter: '',
  fourthParamFooter: '',
  firstTextFooter: '',
  secondTextFooter: '',
  thirdTextFooter: '',
  fourthTextFooter: '',
  fifthenParamFooter: '',
  fifthenTextFooter: '',
};
Footer.propTypes = {
  firstParamFooter: PropTypes.string,
  secondParamFooter: PropTypes.string,
  thirdParamFooter: PropTypes.string,
  fourthParamFooter: PropTypes.string,
  firstTextFooter: PropTypes.string,
  secondTextFooter: PropTypes.string,
  thirdTextFooter: PropTypes.string,
  fourthTextFooter: PropTypes.string,
  fifthenParamFooter: PropTypes.string,
  fifthenTextFooter: PropTypes.string,
};
export default Footer;
