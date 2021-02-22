import axios from 'axios';
import MySwal from '../../components/Shared/SweetAlert';

const api = axios.create({
  baseURL: 'https://us-central1-squads-dev.cloudfunctions.net/api/v1',
});

export async function buscaKMs(callback) {
  try {
    const kms = await api.get('/bicycle');
    callback(kms.data);
  } catch (e) {
    console.log('error: ', e);
  }
}

export async function getAllSquads() {
  let allSquads;
  try {
    allSquads = await api.get(`/squads`);
  } catch (e) {
    console.log('Error: ', e);
  }
  return allSquads;
}
export async function getAllOccupations() {
  let allOccupations;
  try {
    allOccupations = await api.get(`/areas`);
  } catch (e) {
    console.log('Error: ', e);
  }

  return allOccupations;
}

export async function getSquadInfos(squadName) {
  let squadsInfos;

  try {
    squadsInfos = await api.get(`/squads/${squadName}`);
  } catch (e) {
    console.log('Error: ', e);
  }

  return squadsInfos;
}

export async function sendForm(name, email, occupation, squads) {
  try {
    const res = await api.post('/forms', { name, email, occupation, squads });
    if (res.status >= 500) {
      MySwal.fire(
        'Erro no Servidor!',
        'Servidor Fora do Ar!',
        'error',
      ).then(() => window.location.reload());
    }
    MySwal.fire(
      'Boa Peceger!',
      'Formulário enviado com Sucesso!',
      'success',
    ).then(() => window.location.reload());
  } catch (e) {
    console.log('error: ', e);
  }
}

export async function getDataForCarrousel() {
  let numbersOfCarrousel;
  try {
    numbersOfCarrousel = await api.get(`/modalidades`);
  } catch (e) {
    console.log(e);
  }
  return numbersOfCarrousel?.data;
}
export async function getNumbersForCarrousel(squadName) {
  let numbersOfCarrousel;
  try {
    numbersOfCarrousel = await api.get(`/modalidades/${squadName}`);
  } catch (e) {
    console.log(e);
  }
  return numbersOfCarrousel;
}
