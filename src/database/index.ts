import { DataSource } from 'typeorm';
import { Event } from './eventModel';

export const initDb = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'game_events',
    entities: [Event],
    synchronize: true, // Set to false in production
  });

  try {
    await dataSource.initialize();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
};
