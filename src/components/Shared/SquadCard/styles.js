import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SquadsCard = styled(Link)`
  margin: 20px;
  background: #707070;
  border-radius: 15px;
  box-shadow: 0px 5px 7px #840b3e;
  width: 255px;
  height: 235px;
  text-decoration: none;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  img {
    height: 175px;
    width: 100%;
  }
`;

export const ImgSubtitlesContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Helvetica;
  font-size: 18px;
  font-weight: 100;
  color: #fff;

  span {
    margin-right: 7px;
  }

  p {
    font-weight: 700;
  }
`;
