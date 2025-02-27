import { DebugLoggerFactory } from "./DebugLoggerFactory"
import { ILogger } from "./ILogger"
import { ILoggerFactory } from "./ILoggerFactory"
import LoggerFactory from "./LoggerFactory"

// const debugLogger: ILogger = LoggerFactory.createLogger('DEBUG')
// const errorLogger: ILogger = LoggerFactory.createLogger('ERROR')
// const infoLogger: ILogger = LoggerFactory.createLogger('INFO')

// debugLogger.log('It is a Debugging Log')
// errorLogger.log('It is a Error Log')
// infoLogger.log('It is a Info Log')

const loggerFcatory: ILoggerFactory = new DebugLoggerFactory() // Create Factory
const debugLogger: ILogger = loggerFcatory.createLogger() // Create Debug Logger
debugLogger.log('It is a Debug Log')