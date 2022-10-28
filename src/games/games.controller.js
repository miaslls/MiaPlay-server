import { getAll, add, findById, update, remove } from './games.service.js';

export const getAllGames = async (req, res) => {
  try {
    const games = await getAll();

    if (!games) {
      res.status(404).send({ message: 'not found' });
    }

    res.send(games);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addGame = async (req, res) => {
  try {
    const body = req.body;

    const game = await add(body);

    res.send(game);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findGameById = async (req, res) => {
  try {
    const idParam = req.params.id;

    const game = await findById(idParam);

    if (!game) {
      res.status(404).send({ message: 'not found' });
    }

    res.send(game);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateGame = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const gameById = await findById(idParam);

    if (!gameById) {
      res.status(404).send({ message: 'not found' });
    }

    const game = await update(idParam, body);

    res.send(game);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const idParam = req.params.id;

    const gameById = await findById(idParam);

    if (!gameById) {
      res.status(404).send({ message: 'not found' });
    }

    await remove(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
