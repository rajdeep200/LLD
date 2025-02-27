import { ILogger } from "./ILogger"
import LoggerFactory from "./LoggerFactory"

// Dependent on ILogger only.. Dependency inversion principle. Only dealing with Abstraction
const debugLogger: ILogger = LoggerFactory.createLogger('DEBUG')
const errorLogger: ILogger = LoggerFactory.createLogger('ERROR')
const infoLogger: ILogger = LoggerFactory.createLogger('INFO')

debugLogger.log('It is a Debugging Log')
errorLogger.log('It is a Error Log')
infoLogger.log('It is a Info Log')