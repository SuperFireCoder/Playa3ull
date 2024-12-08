# Technical Test: Game Event Ingesting
## Overview
Develop a self-contained system to ingest events from a hypothetical game.
This test evaluates your ability to design, implement, and explain a multi-component system as a senior engineer end to end.

- The goal is not production-grade code but a clear demonstration of quality, functionality, and thought process.
- **Timebox:** The test is designed to be completed in 4 hours or less.
- **Commit Often:** Show your working process through regular commits.
- **External dependencies:** Use any external dependencies you see fit, you do not need to implement everything from scratch.
- **Keep It Minimal:** Use lightweight libraries and avoid adding unnecessary features, or over-engineering the solution.

## Requirements
- API: 
  - Create a REST-compliant API to ingest events.
  - Ensure the API is type-safe and validates input at runtime.
- Queue:
  - Queue the ingested data for processing using a worker system.
- Worker:
  - Implement a worker to process the queued data.
- Database:
  - Store the processed data in a database.
  - Develop a schema to store the data.
- Unit Test:
  - Write one unit test for a critical part of the system.
- Self Contained & Docker Compose:
  - Ensure everything required to run the system is in the repository.
  - Provide a `docker-compose.yml` file to run external dependencies (e.g database)
  - Document the commands to run the system.

## Questions
- What did you use for the API and why?
  - I've choosed **Fastify** for the API development.
  - Why:
    - **Performance**: Fastify is designed to be fast, with low overhead, which is ideal for handling large-scale event ingestion.
    - **Type-Safety**: It supports TypeScript natively and allows for type-safe request validation and error handling, which is critical for this system.
    - **Plugins**: Fastify’s plugin-based architecture enables modularization, which helps scale the API as more features are added.
- What queue/worker system did you choose and why?
  - I've choosed **(BullMQ)** for Queue/Worker System.
  - Why:
    - **Distributed Queueing**: BullMQ provides job queues with automatic retries, delays, and prioritization. This is suitable for handling events from a game.
    - **Worker Management**: With BullMQ, you can scale workers independently, allowing the system to handle more events as the load grows.
    - **Reliability**: It provides job failure retries and event-based handling, which is important for processing large volumes of events without losing data.
- What database did you use and why?
  - I've choosed **(PostgreSQL)** for Database.
  - Why:
    - **Relational Data**: PostgreSQL is an excellent choice for structured data like events, where relational integrity is important.
    - **Scalability**: PostgreSQL is capable of handling large-scale data efficiently, and it supports advanced features like indexing, transactions, and concurrency control.
    - **Integration**: PostgreSQL integrates well with libraries like TypeORM or Prisma for database access, providing an ORM layer to simplify querying and schema management.
- What key decisions did you make about how the system is structured and why?


> [!IMPORTANT]
> Answer the above questions in this file

## Extra Credit
- Implement a retry mechanism in the worker for failed jobs
- Include a performance optimization (e.g. batch processing in the worker)
- Create additional tests for edge cases

## Installation

```bash
$ git clone https://github.com/SuperFireCoder/Playa3ull.git
$ cd Playa3ull
$ npm run install
```

## Usage
```bash
# build
$ docker compose build

# start app
$ docker compose up
```
