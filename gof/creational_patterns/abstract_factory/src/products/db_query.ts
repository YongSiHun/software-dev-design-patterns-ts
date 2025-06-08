export interface DBQuery {
  execute(sql: string): void;
}
