import { LoggerFactory } from "./logger_factory";
import { Logger } from "../products/logger";
import { ConsoleLogger } from "../products/console_logger";

export class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new ConsoleLogger();
  }
}
