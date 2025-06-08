import { DBConnection } from "./db_connection";

export class PostgresConnection implements DBConnection {
  connect(): void {
    console.log("Connecting to PostgreSQL database...");
  }

  disconnect(): void {
    console.log("Disconnecting from PostgreSQL database...");
  }
}
