import fastify from 'fastify';
import eventController from '../api/controller/eventController';
import { EventService } from '../api/service/eventService';

jest.mock('../src/service/eventService');

const server = fastify();
server.register(eventController);

describe('Event Controller', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    const mockEvent = { type: 'test', data: 'test data' };
    const mockProcessedEvent = { id: 1, ...mockEvent };

    (EventService.processEvent as jest.Mock).mockResolvedValue(mockProcessedEvent);

    const response = await server.inject({
      method: 'POST',
      url: '/api/events',
      payload: mockEvent
    });

    expect(response.statusCode).toBe(201);
  });

  it('should handle internal errors gracefully', async () => {
    const mockEvent = { type: 'test', data: 'test data' };

    (EventService.processEvent as jest.Mock).mockRejectedValue(new Error('Database error'));

    const response = await server.inject({
      method: 'POST',
      url: '/api/events',
      payload: mockEvent
    });

    expect(response.statusCode).toBe(500);
    expect(response.body).toContain('Error processing event');
  });
});
