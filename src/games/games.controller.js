import { getAll, create, getById, update, remove } from './games.service.js';
import { addGameToGenreGameList, removeGameFromGenreGameList } from './util/manageGenreGameList.js';

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

export const createGame = async (req, res) => {
  try {
    const body = req.body;
    const game = await create(body);

    game.genres.forEach((genre) => {
      addGameToGenreGameList(genre, game._id);
    });

    res.send(game);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getGameById = async (req, res) => {
  try {
    const idParam = req.params.id;

    const game = await getById(idParam);

    if (!game) {
      return res.status(404).send({ message: 'not found' });
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

    const gameById = await getById(idParam);

    if (!gameById) {
      return res.status(404).send({ message: 'not found' });
    }

    const game = await update(idParam, body);

    if (body.genres) {
      const gameByIdGenreStrings = [];

      gameById.genres.forEach((genre) => {
        gameByIdGenreStrings.push(genre._id.toString());
      });

      if (gameByIdGenreStrings !== body.genres) {
        const genresAdded = body.genres.filter((genre) => !gameByIdGenreStrings.includes(genre));
        const genresDeleted = gameByIdGenreStrings.filter((genre) => !body.genres.includes(genre));

        genresAdded.forEach((genre) => {
          addGameToGenreGameList(genre, idParam);
        });

        genresDeleted.forEach((genre) => {
          removeGameFromGenreGameList(genre, idParam);
        });
      }
    }

    res.send(game);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const idParam = req.params.id;
    const gameById = await getById(idParam);

    if (!gameById) {
      return res.status(404).send({ message: 'not found' });
    }

    await remove(idParam);

    const gameByIdGenreStrings = [];

    gameById.genres.forEach((genre) => {
      gameByIdGenreStrings.push(genre._id.toString());
    });

    gameByIdGenreStrings.forEach((genre) => {
      removeGameFromGenreGameList(genre, idParam);
    });

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
