import { createLogger, format, transports } from 'winston';
import moment from 'moment';

const {combine, colorize, timestamp, label, printf } = format;

const logConfigConsole = {
  format: combine(
    colorize(),
    timestamp(),
    label({ label: 'API' }),
    printf(
      info => `${
        moment(info.timestamp)
          .format('HH:mm:ss-SSS')
        } [${
          info.level
        }]\t${
          info.label
        }: ${
          info.message
        }`
    )
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
  ],
  level: process.env.LOGLEVEL
};

export const logger = createLogger(logConfigConsole);
