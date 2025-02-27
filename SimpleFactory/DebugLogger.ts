import { ILogger } from "./ILogger";

export class DebugLogger implements ILogger {
    log(message: string): void {
        console.log(`DEBUG: ${message}`);
    }
}