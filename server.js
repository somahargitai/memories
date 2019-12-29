import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const mongoose = require('mongoose');

import { morganLogThroughWinston, morganLogPure } from './logger/morganLogger';
import { router } from './router';
import { logger } from './logger/winstonLogger';

const app = express();
const port = 5001


const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('|| MONGO CONNECTED ||'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morganLogThroughWinston);
app.use(router);

app.listen(port, () => {
  logger.info(`connected on port ${port}`)
  logger.info(`log level: ${process.env.LOGLEVEL}`)
});
