import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavContainerLogo = styled.nav`
  align-items: center;
  padding: 10px 20px;

  background: #fff;

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const DivMenuIcon = styled.div`
  width: 1.5rem;
  height: 0.2rem;
  background: black;
  transform-origin: 1px;
  position: relative;
  transition: opacity 300ms, transform 300ms;

  :first-child {
    transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
  }
  :nth-child(2) {
    opacity: ${({ nav }) => (nav ? '0' : '1')};
  }
  :nth-child(3) {
    transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const MenuIcon = styled.button`
  display: none;
  justify-content: space-around;
  flex-direction: column;
  height: 1.5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 110;

  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  background: #d7d7d7;
  position: fixed;
  z-index: 100;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(-0)' : 'translateX(-100%)')};

  @media screen and (min-width: 1000px) {
    transform: translateX(-100%);
  }
`;

const ULMenuLink = styled.ul`
  list-style: none;
`;

const LIMenuLink = styled.li`
  margin-top: 1rem;
`;

const TextMenuLink = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  cursor: pointer;
  transition: color 300ms;
  padding: 10px 22px;
  text-transform: uppercase;
  text-align: center;
  font: normal normal bold 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  outline: none;
  border: none;
  :hover {
    color: #6ab4ff;
  }
`;

export {
  TextMenuLink,
  ULMenuLink,
  LIMenuLink,
  DivMenuIcon,
  MenuLinks,
  MenuIcon,
  NavContainerLogo,
};
