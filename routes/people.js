import { logger } from '../logger/winstonLogger';
import People from '../models/People';

const people = (req, res) => {
  logger.info('userlist');
   People.find()
     .then(users => {
       console.log(users);
       logger.verbose(JSON.stringify(users, null, 2));
       res.json(users);
     })
     .catch(err => res.status(404)
     .json({
       nopostfound: "No posts found with that ID"
     }));
};

export default people;

