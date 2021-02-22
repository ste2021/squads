import styled from 'styled-components';
import computerGuy from '../../../assets/img/Group.png';

export const FormSection = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const DivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  margin-right: 35px;

  @media (max-width: 840px) {
    margin-right: 0;
  }
`;

export const ImgElement = styled.img.attrs({
  src: computerGuy,
})`
  width: 100%;
`;

export const ShortLine = styled.div`
  border-top: 4px solid #b20f54;
  width: 107px;
  margin-bottom: 28px;
`;

export const FormContainer = styled.div`
  padding: 74px 30px 25px;
`;
