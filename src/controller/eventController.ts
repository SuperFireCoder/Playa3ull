import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function eventController(fastify: FastifyInstance) {
  // GET /api/events
  fastify.get("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    reply.send({
      message: 'Event received',
    });
  });
}
