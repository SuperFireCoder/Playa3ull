import app from "./app";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3000;

app.listen({ port: FASTIFY_PORT });

console.log(`🚀  Fastify server running on port http://localhost:${FASTIFY_PORT}`);
console.log(`Route event: /api/events`);
