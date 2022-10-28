import express from 'express';
const router = express.Router();

import { getAllGames, addGame, findGameById, updateGame, deleteGame } from './games.controller.js';
import { validGameId, validGameBody } from './games.middleware.js';

router.get('/', getAllGames);
router.post('/', validGameBody, addGame);
router.get('/:id', validGameId, findGameById);
router.put('/:id', validGameId, updateGame);
router.delete('/:id', validGameId, deleteGame);

export default router;
