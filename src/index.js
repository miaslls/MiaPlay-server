import express from 'express';
import cors from 'cors';
import databaseConnection from './database/dbConnection.js';
import 'dotenv/config';

import gamesRoute from './games/games.route.js';
import genresRoute from './genres/genres.route.js';

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

app.use('/games', gamesRoute);
app.use('/genres', genresRoute);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
