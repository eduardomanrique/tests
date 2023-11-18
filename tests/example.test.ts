import request from 'supertest';
import app from '../src/app';

describe('Example Test Suite', () => {
  it('GET /get - success', async () => {
    const result = await request(app).get('/get');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual({ message: 'Hello World!' });
  });
});
