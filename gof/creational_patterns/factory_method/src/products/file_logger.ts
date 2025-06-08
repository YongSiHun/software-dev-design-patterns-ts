import { Logger } from "./logger";

export class FileLogger implements Logger {
  log(message: string): void {
    console.log(`Logging to file: ${message}`);
    // 실제 파일 로깅 로직이 여기 들어갈 수 있습니다.
  }
}
