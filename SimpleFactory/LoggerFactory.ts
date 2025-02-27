import { DebugLogger } from "./DebugLogger";
import { ErrorLogger } from "./ErrorLogger";
import { InfoLogger } from "./InfoLogger";

// This factory is responsible for creating a logger
export default class LoggerFactory {
  public static createLogger(type: string) {
    // This LoggerFactory logic is violation the 'O' in SOLID Principal
    switch (type) {
      case "DEBUG":
        return new DebugLogger();
      case "ERROR":
        return new ErrorLogger();
      case "INFO":
        return new InfoLogger();

      default:
        return new ErrorLogger();
    }
  }
}
