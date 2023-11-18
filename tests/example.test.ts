const request = require('supertest');
const app = require('../src/app');

describe('Example Test Suite', () => {
  it('GET /get - success', async () => {
    const result = await request(app).get('/get');
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ message: 'Hello World!' });
  });
});
