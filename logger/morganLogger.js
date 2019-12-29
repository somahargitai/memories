import morgan from 'morgan';
import { logger } from './winstonLogger';

const morganLogPure = morgan('dev');
const morganLogThroughWinston = morgan(
  'tiny',
  {
    stream: {
      write: (text) => {
        logger.info(text); // somehow it does not work on lower level than info
      }
    }
  }
);

export {
  morganLogPure,
  morganLogThroughWinston,
};
