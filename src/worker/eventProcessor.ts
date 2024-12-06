import { Worker, Job } from 'bullmq';
import { EventService } from '../api/service/eventService';
import { Event } from '../database/eventModel';

export const eventWorker = new Worker('eventQueue', async (job: Job) => {
  const event = job.data as Event;

  try {
    console.log('Processing event:', event);
    const result = await EventService.processEvent(event);
    console.log('Event processed:', result);
  } catch (error) {
    console.error('Error processing event:', error);
    throw error;
  }
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
  limiter: {
    max: 5,
    duration: 1000,
  },
});

eventWorker.on('completed', (job) => {
  console.log(`Job ${job.id} has been processed successfully.`);
});

eventWorker.on('failed', (job, err) => {
  console.error(`Job ${job!.id} failed with error: ${err.message}`);
});
