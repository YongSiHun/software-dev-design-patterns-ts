import { DBQuery } from "./db_query";

export class MySQLQuery implements DBQuery {
  execute(sql: string): void {
    console.log(`Executing MySQL query: ${sql}`);
  }
}
