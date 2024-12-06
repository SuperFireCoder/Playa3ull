import fastify from 'fastify';

const server = fastify();

describe('Event Controller', () => {
  it('should reject invalid event data', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/api/events',
      payload: {}
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toContain('Invalid event data');
  });

  it('should process event and return status 201', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/api/events',
      payload: {
        type: 'test',
        data: 'test data'
      }
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
