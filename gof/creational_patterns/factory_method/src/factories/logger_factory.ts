import { Logger } from "../products/logger";

export abstract class LoggerFactory {
  abstract createLogger(): Logger;
}
