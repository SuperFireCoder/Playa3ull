import { FastifyInstance } from "fastify";
import eventController from "./controller/eventController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(eventController, { prefix: "/api/events" });
}
