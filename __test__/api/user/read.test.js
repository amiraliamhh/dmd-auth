import axios from 'axios';
import { baseUrl } from '../../conf';
import { signup } from './create.test';
import { MongoClient } from 'mongodb';

describe('reading user using api calls', () => {
  const body = {
    email: 'sampleforlogin@gmail.com',
    password: 'samplepass'
  };

  beforeAll((done) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/', (err, db) => {
      if (err) throw err;

      const dbo = db.db('auth');

      dbo.collection('users').findOne({email: body.email}, (err, user) => {
        if (err) throw err;

        if (user) {
          done();
        } else {
          signup(body)
          .then(({data}) => {
            if (data.success) {
              done()
            } else {
              throw data;
            }
          })
        }
      })
    })
  })

  test('test user login', () => {
    
    return login(body)
      .then(({data}) => {
        expect(data).toHaveProperty('success');
        expect(data.success).toBeTruthy();
        expect(data).toHaveProperty('token');
        expect(typeof data.token).toBe('string');
      });
  })
})

export function login(body) {
  return axios.post(`${baseUrl}/api/v1.0/login`, body)
}