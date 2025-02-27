import { ILogger } from "./ILogger";

export class InfoLogger implements ILogger {
    log(message: string): void {
        console.log(`INFO: ${message}`);
    }
}