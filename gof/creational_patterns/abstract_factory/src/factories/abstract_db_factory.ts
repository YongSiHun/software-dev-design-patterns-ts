import { DBConnection } from "../products/db_connection";
import { DBQuery } from "../products/db_query";

export interface AbstractDBFactory {
  createConnection(): DBConnection;
  createQuery(): DBQuery;
}
