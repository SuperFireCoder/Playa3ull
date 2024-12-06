import { z } from 'zod';

export const EventSchema = z.object({
  type: z.string().min(1, { message: "Event type is required" }),
  data: z.string().min(1, { message: "Event data is required" }),
});

export type Event = z.infer<typeof EventSchema>;
