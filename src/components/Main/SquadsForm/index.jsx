import React from 'react';
import Form from './Form';
import {
  FormSection,
  DivisionContainer,
  ImgContainer,
  ImgElement,
  ShortLine,
  FormContainer,
} from './styles';

function SquadsForm() {
  return (
    <FormSection name="squadsform">
      <DivisionContainer>
        <ImgContainer>
          <ImgElement />
        </ImgContainer>
      </DivisionContainer>
      <DivisionContainer>
        <FormContainer>
          <ShortLine />
          <Form />
        </FormContainer>
      </DivisionContainer>
    </FormSection>
  );
}

export default SquadsForm;
