import { DebugLogger } from "./DebugLogger";
import { ErrorLogger } from "./ErrorLogger";
import { InfoLogger } from "./InfoLogger";

export default class LoggerFactory {
  public static createLogger(type: string) {
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
