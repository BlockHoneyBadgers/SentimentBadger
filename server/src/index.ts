import * as http from 'http';

import path from 'path';

import * as dotenv from 'dotenv';

import express from 'express';

import cors from 'cors';

import { getBusinessHandler } from './requestHandlers/getBusinessHandler';

dotenv.config();

const { PORT } = process.env;

const expressApp = express();
expressApp.use(cors());
expressApp.use(express.static(path.join(__dirname, 'public')));
expressApp.get('/api/business/:googleId/:yelpId', getBusinessHandler);

const httpServer = http.createServer(expressApp);
httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('SentimentBadger listening at port %d', PORT);
});
