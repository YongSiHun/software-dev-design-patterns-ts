export class DatabaseService {
  private data: Map<string, any>;

  constructor() {
    console.log("DatabaseService initialized.");
    this.data = new Map<string, any>();
    this.data.set("user:1", { id: 1, name: "John Doe" });
  }

  fetchData(key: string): any {
    console.log(`Fetching data for key: ${key}`);
    return this.data.get(key);
  }
}
