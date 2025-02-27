import { ILogger } from "./ILogger";

export interface ILoggerFactory {
    createLogger(): ILogger
}