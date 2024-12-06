import { Queue } from 'bullmq';
import { Event } from '../api/schema/eventSchema';

export const eventQueue = new Queue('eventQueue', {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

export const addEventToQueue = async (event: Event) => {
  try {
    await eventQueue.add('processEvent', event);
    console.log('Event added to the queue:', event);
  } catch (error) {
    console.error('Error adding event to the queue:', error);
  }
};
