export interface DBConnection {
  connect(): void;
  disconnect(): void;
}
