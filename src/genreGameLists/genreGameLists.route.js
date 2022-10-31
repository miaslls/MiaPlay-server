import express from 'express';
const router = express.Router();

import {
  getAllGenreGameLists,
  // createGenreGameList,
  // getGenreGameListByGenreId,
  // updateGenreGameListbyGenreId,
  // removeGenreGameListByGenreId,
} from './genreGameLists.controller.js';

router.get('/', getAllGenreGameLists);
// router.post('/', createGenreGameList);
// router.post('/', createGenreGameList);
// router.get('/:genreId', getGenreGameListByGenreId);
// router.patch('/:genreId', updateGenreGameListbyGenreId);
// router.delete('/:genreId', removeGenreGameListByGenreId);

export default router;
