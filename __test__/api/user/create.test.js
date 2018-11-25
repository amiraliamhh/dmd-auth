import axios from 'axios';
import { baseUrl } from '../../conf';
import { MongoClient } from 'mongodb';

describe('creating user using api calls', () => {
  beforeAll((done) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/', (err, db) => {
      if (err) throw err;

      const dbo = db.db('auth');

      dbo.collection('users').deleteOne({email: 'sample@gmail.com'}, (err, obj) => {
        if (err) throw err;

        done();
      })
    })
  })

  test('user sign up: has property "success"', () => {
    expect.assertions(2);
  
    const body = {
      email: 'sample@gmail.com',
      password: 'samplepass'
    };
  
    return signup(body)
      .then(({data}) => {
        expect(data).toHaveProperty('success');
        expect(data.success).toBeTruthy();
      });
  });
})

function signup(body) {
  return axios.post(`${baseUrl}/api/v1.0/signup`, body)
}

