import express from 'express';
const router = express.Router();

import {
  getAllGenreGameLists,
  createGenreGameList,
  getGenreGameListByGenreId,
} from './genreGameLists.controller.js';

router.get('/', getAllGenreGameLists);
router.post('/', createGenreGameList);
router.post('/', createGenreGameList);
router.get('/:genreId', getGenreGameListByGenreId);

export default router;
