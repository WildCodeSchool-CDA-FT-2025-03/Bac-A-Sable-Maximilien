import { createLogger, format, loggers, transports } from "winston";
import chalk from "chalk";


const toText = format.printf(
  ({ timestamp, message, level }) =>
    `${timestamp} [${level}] ${JSON.stringify(message)}`,
);

const toTextError = format.printf(
  ({ timestamp, message, level }) =>
    chalk.red(`${timestamp} [${level}] ${JSON.stringify(message)}`),
);

const loggerInfoTransporter = [];
const loggerErrorTransporter = [];

loggerInfoTransporter.push(
  new transports.Console({
    format: format.combine(format.timestamp(), toText),
  }),
);

loggerErrorTransporter.push(
    new transports.Console({
      format: format.combine(format.timestamp(), toTextError),
    })
  );

const infoLogger = createLogger({
  transports: loggerInfoTransporter,
});

const errorLogger = createLogger({
    transports: loggerErrorTransporter,
  });

export default {
    info: (message: string) => {
        infoLogger.info(message);
    },
    error: (message: string) => {
        errorLogger.error(message);
    }
};
