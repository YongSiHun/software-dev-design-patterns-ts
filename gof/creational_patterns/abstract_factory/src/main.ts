import { AbstractDBFactory } from "./factories/abstract_db_factory";
import { MySQLDBFactory } from "./factories/mysql_db_factory";
import { PostgresDBFactory } from "./factories/postgres_db_factory";

function handleDatabase(factory: AbstractDBFactory): void {
  const connection = factory.createConnection();
  const query = factory.createQuery();

  connection.connect();
  query.execute("SELECT * FROM users;");
  connection.disconnect();
}

console.log("Using MySQL:");
const mysqlFactory = new MySQLDBFactory();
handleDatabase(mysqlFactory);

console.log("\nUsing PostgreSQL:");
const postgresFactory = new PostgresDBFactory();
handleDatabase(postgresFactory);
