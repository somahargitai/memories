import express from 'express';
import { logger } from './logger/winstonLogger';
import personadd from './routes/personadd';
import people from './routes/people';

const router = express.Router();

router.use('/', async (req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  logger.info('health check');
  return res.json('health check');
});

router.post('/personadd', personadd);
router.get('/peoplelist', people);

export {
  router
};
