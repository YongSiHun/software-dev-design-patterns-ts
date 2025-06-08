import { DatabaseService } from "../services/database_service";

export class UserModel {
  private dbService: DatabaseService | null = null;
  private userData: any | null = null;

  constructor(private userId: string) {}

  private initializeService(): void {
    if (!this.dbService) {
      this.dbService = new DatabaseService();
    }
  }

  getUserData(): any {
    if (!this.userData) {
      this.initializeService();
      this.userData = this.dbService?.fetchData(`user:${this.userId}`);
    }
    return this.userData;
  }
}
