import express from 'express';
const router = express.Router();

import {
  getAllGenres,
  addGenre,
  findGenreById,
  updateGenre,
  deleteGenre,
} from './genres.controller.js';
import { validGenreId, validGenreBody } from './genres.middleware.js';

router.get('/', getAllGenres);
router.post('/', validGenreBody, addGenre);
router.get('/:id', validGenreId, findGenreById);
router.patch('/:id', validGenreId, updateGenre);
router.delete('/:id', validGenreId, deleteGenre);

export default router;
