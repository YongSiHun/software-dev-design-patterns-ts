import { DBConnection } from "./db_connection";

export class MySQLConnection implements DBConnection {
  connect(): void {
    console.log("Connecting to MySQL database...");
  }

  disconnect(): void {
    console.log("Disconnecting from MySQL database...");
  }
}
