import { LoggerFactory } from "./factories/logger_factory";
import { FileLoggerFactory } from "./factories/file_logger_factory";
import { ConsoleLoggerFactory } from "./factories/console_logger_factory";

function logMessage(factory: LoggerFactory, message: string): void {
  const logger = factory.createLogger();
  logger.log(message);
}

console.log("Using File Logger:");
const fileLoggerFactory = new FileLoggerFactory();
logMessage(fileLoggerFactory, "This is a file log message.");

console.log("\nUsing Console Logger:");
const consoleLoggerFactory = new ConsoleLoggerFactory();
logMessage(consoleLoggerFactory, "This is a console log message.");
