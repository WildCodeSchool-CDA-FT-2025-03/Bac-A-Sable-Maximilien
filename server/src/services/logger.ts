import { createLogger, format, transports } from "winston";
import chalk from "chalk";

const toText = format.printf(({ timestamp, message, level }) => {
  if (level === "error") {
    return chalk.red(`${timestamp} [${level}] ${JSON.stringify(message)}`);
  }

  return `${timestamp} [${level}] ${JSON.stringify(message)}`;
});

const loggerTransporter = [];

loggerTransporter.push(
  new transports.Console({
    format: format.combine(format.timestamp(), toText),
  }),
);

const logger = createLogger({
  transports: loggerTransporter,
});

export default logger;
