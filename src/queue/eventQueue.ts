import { Queue, Worker } from 'bullmq';
import { EventProcessor } from '../worker/eventProcessor';

const eventQueue = new Queue('eventQueue', {
  connection: { host: 'localhost' },
});

const worker = new Worker('eventQueue', EventProcessor, {
  connection: { host: 'localhost' },
});

export { eventQueue, worker };
