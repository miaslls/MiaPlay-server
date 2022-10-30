import express from 'express';
const router = express.Router();

import {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame,
} from './games.controller.js';
import { validGameId, validGameBody } from './games.middleware.js';

router.get('/', getAllGames);
router.post('/', validGameBody, createGame);
router.get('/:id', validGameId, getGameById);
router.put('/:id', validGameId, updateGame);
router.delete('/:id', validGameId, deleteGame);

export default router;
