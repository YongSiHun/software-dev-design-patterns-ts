import { DBQuery } from "./db_query";

export class PostgresQuery implements DBQuery {
  execute(sql: string): void {
    console.log(`Executing PostgreSQL query: ${sql}`);
  }
}
