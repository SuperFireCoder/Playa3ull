import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import z from "zod";

import { EventSchema } from "../schema/eventSchema";
import { EventService } from "../service/eventService";

export default async function eventController(fastify: FastifyInstance) {
  fastify.post("/", async function (
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const event = EventSchema.parse(request.body);
      const result = await EventService.processEvent(event);
      reply.status(201).send(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({
          message: 'Invalid event data',
          details: error.errors,
        });
      }
      reply.status(500).send({ message: 'Error processing event' });
    }
  });
}
