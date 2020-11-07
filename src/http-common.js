import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'http://localhost:3030/',
  headers: {
    'Content-type': 'application/json',
  },
});
