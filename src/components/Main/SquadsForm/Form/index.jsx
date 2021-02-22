import React, { useState, useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import {
  sendForm,
  getAllSquads,
  getAllOccupations,
} from '../../../../services/api';
import '../../../Shared/SweetAlert/sweet.css';

import {
  FormTitle,
  InputContainer,
  InputElement,
  CustomSelect,
  InputLabel,
  SignUpForm,
  SelectElement,
  ButtonElement,
} from './styles';

function Form() {
  const animatedComponents = makeAnimated();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupationOptions, setOccupationOptions] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [squadOptions, setSquadOptions] = useState([]);
  const [FormSquads, setFormSquads] = useState(['Pecege Musical']);

  useEffect(() => {
    async function getSquads() {
      const allSquads = await getAllSquads();
      const squadsRecovered = allSquads.data.map((squad) => {
        const newOption = { value: squad.nome, label: squad.nome };
        return newOption;
      });
      setSquadOptions(squadsRecovered);
    }

    getSquads();
  }, []);

  useEffect(() => {
    const getOccupation = async () => {
      const response = await getAllOccupations();

      setOccupationOptions(response?.data);
    };
    getOccupation();
  }, []);

  function handleSubmit(event) {
    sendForm(name, email, occupation, FormSquads);
    console.log('teste:', name, email, occupation, FormSquads);
    event.preventDefault(event);
  }

  function handleName(event) {
    const dataName = event.target.value;
    setName(dataName);
  }

  function handleEmail(event) {
    const dataEmail = event.target.value;
    setEmail(dataEmail);
  }

  function handleOccupation(event) {
    const dataOccupation = event.target.value;
    console.log('data: ', dataOccupation);
    setOccupation(dataOccupation);
    console.log('occupation: ', dataOccupation);
  }

  function handleSquads(event) {
    const squadsSelected = event.map((squad) => {
      const squadName = squad.value;
      return squadName;
    });

    setFormSquads(squadsSelected);
  }

  return (
    <SignUpForm onSubmit={(e) => handleSubmit(e)}>
      <FormTitle>Quer participar?</FormTitle>
      <InputContainer>
        <InputLabel>Nome completo</InputLabel>
        <InputElement
          name="name"
          value={name}
          type="text"
          placeholder="Nome completo"
          onChange={(e) => {
            handleName(e);
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>E-mail</InputLabel>
        <InputElement
          name="email"
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(e) => {
            handleEmail(e);
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Área de atuação</InputLabel>
        <SelectElement
          name="Áreas"
          placeholder="Area de Atuação"
          onChange={(e) => {
            handleOccupation(e);
          }}
        >
          {occupationOptions.map((occupations) => (
            <option
              name={occupations.nome}
              value={occupations[occupation.nome]}
              key={occupations.id}
            >
              {occupations.nome}
            </option>
          ))}
        </SelectElement>
      </InputContainer>
      <InputContainer>
        <InputLabel>Squads</InputLabel>
        <CustomSelect
          classNamePrefix="Select"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[{ value: 'Pecege Musical', label: 'Pecege Musical' }]}
          isMulti
          options={squadOptions}
          placeholder="Digite o nome do Squad"
          onChange={(e) => {
            handleSquads(e);
          }}
        />
      </InputContainer>
      <ButtonElement type="submit">ENVIAR</ButtonElement>
    </SignUpForm>
  );
}

export default Form;
