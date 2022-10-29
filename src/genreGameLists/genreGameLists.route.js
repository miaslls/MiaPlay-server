import express from 'express';
const router = express.Router();

import { getAllGenreGameLists } from './genreGameLists.controller.js';
import { validGenreId } from '../genres/genres.middleware.js';

router.get('/', getAllGenreGameLists);

export default router;
