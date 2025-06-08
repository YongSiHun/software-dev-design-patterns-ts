export interface Service {
  fetchData(): string;
}

export class RealService implements Service {
  fetchData(): string {
    console.log("RealService: Fetching data...");
    return "Data from RealService";
  }
}
