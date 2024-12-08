import fastify from "fastify";
import router from "./router";
import { initDb } from "./database";

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== "development"),
});

const startServer = async () => {
  try {
    server.register(router);
    await initDb();
  } catch (error) {
    console.error("Error during app startup:", error);
    process.exit(1);
  }
};

startServer();

export default server;
