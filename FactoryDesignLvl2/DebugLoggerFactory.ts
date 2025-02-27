import { DebugLogger } from "./DebugLogger";
import { ILogger } from "./ILogger";
import { ILoggerFactory } from "./ILoggerFactory";

export class DebugLoggerFactory implements ILoggerFactory {
    createLogger(): ILogger {
        return new DebugLogger();
    }
}