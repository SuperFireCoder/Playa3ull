import { DataSource } from 'typeorm';
import { Event } from './eventModel';

export const initDb = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'game_events',
    entities: [Event],
  });

  try {
    await dataSource.initialize();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
};
