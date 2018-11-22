import axios from 'axios';
import { baseUrl } from '../../conf';

function signup(body) {
  return axios.post(`${baseUrl}/api/v1.0/signup`, body)
}

it('user sign up: has property "success"', () => {
  // expect.assertions(1);

  const body = {
    email: 'sample2@gmail.com',
    password: 'samplepass'
  };

  return signup(body)
    .then(({data}) => expect(data).toHaveProperty('success'));
});