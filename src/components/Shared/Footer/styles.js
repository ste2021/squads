import styled from 'styled-components';
import { Link } from 'react-scroll';

const ContainerFooter = styled.nav`
  display: flex;
  width: 100%;
  padding: 45px 50px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ContainerBarTopSideFotter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarTopSideFotter = styled.div`
  margin-top: 100px;
  width: 107px;
  height: 4px;
  opacity: 1;
  border-top: 4px solid #b20f54;
`;

const ContainerLogoPecege = styled.div`
  display: flex;
  width: 100%;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const ContainerLogoSquads = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-left: 1px solid #707070;
  @media screen and (max-width: 1000px) {
    border: none;
  }
`;

const MenuFotter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 10%;
  white-space: nowrap;
`;

const ItemMenuFotter = styled.li`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`;

const LinkMenuFotter = styled(Link)`
  text-decoration: none;
  width: 100%;
  font-size: 3rem;
  cursor: pointer;
  transition: color 300ms;
  padding: 5px 22px;
  text-transform: uppercase;
  font: normal normal bold 16px/19px Helvetica;
  color: #707070;
  :hover {
    color: #b20f54;
  }
`;

export {
  ContainerBarTopSideFotter,
  ContainerFooter,
  ContainerLogoPecege,
  ContainerLogoSquads,
  BarTopSideFotter,
  MenuFotter,
  ItemMenuFotter,
  LinkMenuFotter,
};
