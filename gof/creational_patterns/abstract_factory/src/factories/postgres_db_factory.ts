import { AbstractDBFactory } from "./abstract_db_factory";
import { DBConnection } from "../products/db_connection";
import { DBQuery } from "../products/db_query";
import { PostgresConnection } from "../products/postgres_connection";
import { PostgresQuery } from "../products/postgres_query";

export class PostgresDBFactory implements AbstractDBFactory {
  createConnection(): DBConnection {
    return new PostgresConnection();
  }

  createQuery(): DBQuery {
    return new PostgresQuery();
  }
}
