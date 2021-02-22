import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const Nav = styled.nav`
  height: 120px;
  width: 100%;
  display: flex;
  position: fixed;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  z-index: 20;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-align: left;
  font: normal normal normal 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  transition: color 300ms;
  cursor: pointer;
  :hover {
    color: #b20f54;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavBtnLinkMain = styled(Link)`
  border-radius: 4px;
  background: #b20f54 0% 0% no-repeat padding-box;
  padding: 10px 22px;
  text-transform: uppercase;
  text-align: left;
  font: normal normal bold 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d61567;
  }
`;

const NavBtnLinkSquads = styled(LinkRouter)`
  border-radius: 4px;
  background: #b20f54 0% 0% no-repeat padding-box;
  padding: 10px 22px;
  text-transform: uppercase;
  text-align: left;
  font: normal normal bold 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d61567;
  }
`;

const Logo = styled.img`
  width: 217px;
  height: 86px;
  cursor: pointer;
  margin: 0 auto;
`;

export {
  Nav,
  NavLink,
  NavMenu,
  NavBtnLinkMain,
  NavBtnLinkSquads,
  NavBtn,
  Logo,
};
