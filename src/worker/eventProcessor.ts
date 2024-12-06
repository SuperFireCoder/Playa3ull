import { Job } from 'bullmq';

export const EventProcessor = async (job: Job) => {
  console.log(`Processing event: ${job.name}`);
  // Handle event processing logic (e.g., store in database, etc.)
};
