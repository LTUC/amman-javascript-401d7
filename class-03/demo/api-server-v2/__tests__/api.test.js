'use strict';
const { server } = require('../src/server.js'); // => {server,start}
const superTest = require('supertest');
const request = superTest(server);
let id;
describe('api server', () => {
  it('should be able to create a person on POST /person', async () => {
    const response = await request.post('/api/v1/person').send({
      name: 'mahmoud',
      role: 'instructor',
    });
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('mahmoud');
    id = response.body.id;
  });
  it('should be able to update a person on PUT /person', async () => {
    const response = await request.put(`/api/v1/person/${id}`).send({
      name: 'test',
      role: 'instructor',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });
  it('should be able to get a person on Get /person/:id', async () => {
    const response = await request.get(`/api/v1/person/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });
});
