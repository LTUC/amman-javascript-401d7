// test('adds 1+ 2 equal 3', () => {
//   expect(1 + 2).toBe(33);
// });
'use strict';
const superTest = require('supertest');
const server = require('../server.js');
const request = superTest(server.app);

describe('Server', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/foo');
    // console.log(response);
    expect(response.status).toEqual(404);
  });
  it('handle server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handle working routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  });
});
