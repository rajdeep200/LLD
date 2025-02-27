import { ILogger } from "./ILogger";

export class ErrorLogger implements ILogger {
    log(message: string): void {
        console.log(`ERROR: ${message}`);
    }
}