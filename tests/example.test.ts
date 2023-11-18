const request = require('supertest');
const app = require('../src/app');

describe('Example Test Suite', () => {
  let server;

  // Start the server before the tests run
  beforeAll((done) => {
    server = app.listen(3000, done);
  });

  // Close the server after the tests run
  afterAll((done) => {
    server.close(done);
  });

  it('GET /get - success', async () => {
    const result = await request(server).get('/get');
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ message: 'Hello World!' });
  });
});
