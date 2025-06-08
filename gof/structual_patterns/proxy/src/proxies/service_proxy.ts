import { Service, RealService } from "../subjects/service";

export class ServiceProxy implements Service {
  private realService: RealService | null = null;
  private cache: string | null = null;

  fetchData(): string {
    if (!this.realService) {
      console.log("ServiceProxy: Initializing RealService...");
      this.realService = new RealService();
    }

    if (!this.cache) {
      console.log("ServiceProxy: Fetching data and caching it...");
      this.cache = this.realService.fetchData();
    } else {
      console.log("ServiceProxy: Returning cached data...");
    }

    return this.cache;
  }
}
