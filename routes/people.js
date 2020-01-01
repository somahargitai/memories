import { logger } from '../logger/winstonLogger';
import People from '../models/People';

const people = (req, res) => {
  logger.debug('people api');
  People.find()
    .then(peoplefound => {
      logger.verbose(JSON.stringify(peoplefound, null, 2));
      res.json(peoplefound);
    })
    .catch(err =>
      res.status(404).json({
        nopostfound: 'No people found with that ID',
      }),
    );
};

export default people;
