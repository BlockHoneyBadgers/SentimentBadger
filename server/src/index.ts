import * as http from 'http';

import path from 'path';

import * as dotenv from 'dotenv';

import express from 'express';

dotenv.config();

const { PORT } = process.env;

const expressApp = express();
expressApp.use(express.static(path.join(__dirname, 'public')));

const httpServer = http.createServer(expressApp);

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('SentimentBadger listening at port %d', PORT);
});
