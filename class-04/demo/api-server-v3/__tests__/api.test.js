'use strict';
require('dotenv').config();
const { server } = require('../src/server.js'); // => {server,start}
const superTest = require('supertest'); // const supergoose = require('@code-fellows/supergoose)

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const request = superTest(server);

let id;
describe('api server', () => {
  it('should be able to create a person on POST /person', async () => {
    const obj = {
      name: 'test',
      role: 'test',
    };
    const response = await request.post('/api/v1/person').send(obj);
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('test');
    id = response.body._id;
  });
  it('should be able to update a person on PUT /person', async () => {
    const response = await request.put(`/api/v1/person/${id}`).send({
      name: 'test',
      role: 'test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });
  it('should be able to get a person on Get /person/:id', async () => {
    const response = await request.get(`/api/v1/person/${id}`);
    console.log('HIII', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });
});
