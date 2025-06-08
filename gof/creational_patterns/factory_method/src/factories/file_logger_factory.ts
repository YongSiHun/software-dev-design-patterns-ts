import { LoggerFactory } from "./logger_factory";
import { Logger } from "../products/logger";
import { FileLogger } from "../products/file_logger";

export class FileLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new FileLogger();
  }
}
