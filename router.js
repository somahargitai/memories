import express from 'express';
import { logger } from './logger/winstonLogger';
// import up from './routes/up';
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

router.post('/personadd', personadd);
// router.post('/up', up);
router.get('/userlist', people);

router.get('/userlistOld', (req, res) => {
  logger.info('userlist');
  const userList = [
    {
      id: '1',
      name: 'Kogutowicz Manó',
      nick: 'Manó',
      birth: '1988-08-08',
      birthPlace: 'Budapest',
      email: 'mano@mano.com',
    },
    {
      id: '2',
      name: 'Petőfi Sándor',
      nick: 'Ember',
      birth: '1999-09-09',
      email: 'ember@ember.com',
    },
    {
      id: '3',
      name: 'Orlai-Petrich Soma',
      nick: 'Soma',
      birth: '1977-10-10',
      birthPlace: 'Vác',
      email: 'orlai@gmail.com',
    }
  ];
  userList.forEach(item => item.random = getRandomInt(1000));
  // userList[0].random = getRandomInt(1113);
  logger.verbose(JSON.stringify(userList, null, 2));
  return res.json(userList);
});

export {
  router
};
