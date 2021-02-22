import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DivMenuIcon,
  MenuIcon,
  NavContainerLogo,
  MenuLinks,
  ULMenuLink,
  LIMenuLink,
  TextMenuLink,
} from './styles';
import Logotipo from '../../../assets/img/Logotipo.svg';
import { Logo } from '../NavTop/styles';

const MenuHamburguer = ({
  first,
  second,
  thirt,
  forthy,
  fifthen,
  firstParam,
  secondParam,
  thirtParam,
  forthyParam,
  fifthenParam,
}) => {
  const [nav, showNav] = useState(false);
  return (
    <NavContainerLogo>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <DivMenuIcon />
        <DivMenuIcon />
        <DivMenuIcon />
      </MenuIcon>
      <Logo src={Logotipo} />
      <MenuLinks nav={nav}>
        <ULMenuLink>
          <LIMenuLink>
            <TextMenuLink
              onClick={() => showNav(!nav)}
              to={firstParam}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {first}
            </TextMenuLink>
          </LIMenuLink>
          <LIMenuLink>
            <TextMenuLink
              onClick={() => showNav(!nav)}
              to={secondParam}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {second}
            </TextMenuLink>
          </LIMenuLink>
          <LIMenuLink>
            <TextMenuLink
              onClick={() => showNav(!nav)}
              to={thirtParam}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {thirt}
            </TextMenuLink>
          </LIMenuLink>
          <LIMenuLink>
            <TextMenuLink
              onClick={() => showNav(!nav)}
              to={forthyParam}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {forthy}
            </TextMenuLink>
          </LIMenuLink>
          <LIMenuLink>
            <TextMenuLink
              onClick={() => showNav(!nav)}
              to={fifthenParam}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {fifthen}
            </TextMenuLink>
          </LIMenuLink>
        </ULMenuLink>
      </MenuLinks>
    </NavContainerLogo>
  );
};

MenuHamburguer.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  thirt: PropTypes.string.isRequired,
  forthy: PropTypes.string.isRequired,
  fifthen: PropTypes.string.isRequired,
  firstParam: PropTypes.string.isRequired,
  secondParam: PropTypes.string.isRequired,
  thirtParam: PropTypes.string.isRequired,
  forthyParam: PropTypes.string.isRequired,
  fifthenParam: PropTypes.string.isRequired,
};

export default MenuHamburguer;
