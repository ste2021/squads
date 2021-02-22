import styled from 'styled-components';
import Select from 'react-select';

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #707070;
  font-family: 'Poppins-Medium';
  font-size: 20px;
  max-width: 510px;
`;

export const FormTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 50px;
  color: #707070;
  font-family: 'Poppins-Bold';
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 10px 0;
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
`;

export const InputElement = styled.input.attrs({ type: 'text' })`
  background: #f5f5f5;
  border-color: transparent;
  border-radius: 10px;
  height: 48px;
  padding: 0 20px;
  letter-spacing: 2px;
  color: #555;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #aaa;
  }
  :-ms-input-placeholder {
    color: #aaa;
  }

  &:focus {
    outline-color: #a0a0a0;
  }
`;

export const SelectElement = styled.select`
  background: #f5f5f5;
  border-color: transparent;
  border-radius: 10px;
  height: 48px;
  padding: 0 40px;
  font-size: 20px;
  border-right: 10px solid #f5f5f5;
  outline-color: #a0a0a0;
  color: #d8004c;
`;

export const CustomSelect = styled(Select)`
  & .Select__indicator.Select__dropdown-indicator,
  & .Select__indicators {
    display: none;
  }

  & .Select__control {
    background: #f5f5f5;
    border-color: transparent !important;
    box-shadow: none !important;
    border-radius: 10px;
    min-height: 48px;
    padding: 20px;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
  }

  & .Select__placeholder {
    letter-spacing: 2px;
    font-family: Arial;
    font-size: 13px;
    color: #a5a5a5 !important;
    padding-left: 30px;
  }

  & .Select__value-container {
    padding: 0;
  }

  & .Select__value-container div {
    font-family: arial;
    color: #fff;
  }

  & .Select__value-container > div > div {
    background: #d8004c !important;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const ButtonElement = styled.button`
  width: 138px;
  height: 44px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #b20f54;
  color: #fff;
  margin-top: 20px;
`;
