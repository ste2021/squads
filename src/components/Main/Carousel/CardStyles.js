import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  font-family: Helvetica;
  @media screen and (max-width: 490px) {
    margin: 0 0 10px 0;

    height: 100%;
  }
`;

export const Cards = styled.div`
  width: 160px;
  height: 160px;
  text-align: center;
  border-radius: 50%;
  border: #df82a8 02px solid;
  opacity: 0.65;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const ImgCards = styled.img`
  width: 59px;
  height: 90px;
  margin-top: 20%;
`;

export const TextCards = styled.div`
  margin-top: 8px;
  letter-spacing: 0px;
  text-transform: capitalize;
  color: #707070;
  font-size: 20px;
  &:hover {
    color: #b20f54;
    border: 0, 3px solid transparent;
    cursor: pointer;
  }
  @media screen and (max-width: 490px) {
    margin: auto;
    font-size: 17px;
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;
export const TextLoading = styled.h1`
  font-family: Poppins-Bold;
  font-size: 30px;
`;
