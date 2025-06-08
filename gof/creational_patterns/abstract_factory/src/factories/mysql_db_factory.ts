import { AbstractDBFactory } from "./abstract_db_factory";
import { DBConnection } from "../products/db_connection";
import { DBQuery } from "../products/db_query";
import { MySQLConnection } from "../products/mysql_connection";
import { MySQLQuery } from "../products/mysql_query";

export class MySQLDBFactory implements AbstractDBFactory {
  createConnection(): DBConnection {
    return new MySQLConnection();
  }

  createQuery(): DBQuery {
    return new MySQLQuery();
  }
}
