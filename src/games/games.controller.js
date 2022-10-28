import { getAll, add, findById, update, remove } from './games.service.js';
import { findById as getGenre, update as updateGenre } from '../genres/genres.service.js';

const addGameToGenre = async (genre, game) => {
  let genreToUpdate = await getGenre(genre);
  if (!genreToUpdate?.games) {
    genreToUpdate = { ...genreToUpdate, games: [game] };
  } else {
    genreToUpdate.games.push(game);
  }

  const genreBody = { games: genreToUpdate.games };
  await updateGenre(genre, genreBody);
};

const removeGameFromGenre = async (genre, game) => {
  const genreToUpdate = await getGenre(genre);
  const deletedGameindex = genreToUpdate.games.indexOf(game);
  genreToUpdate.games.splice(deletedGameindex, 1);

  const genreBody = { games: genreToUpdate.games };
  await updateGenre(genre, genreBody);
};

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

    game.genres.forEach((genre) => {
      addGameToGenre(genre._id, game._id);
    });

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

    const gameById = await findById(idParam);

    if (!gameById) {
      return res.status(404).send({ message: 'not found' });
    }

    const game = await update(idParam, body);

    if (gameById.genres !== body.genres) {
      const genresAdded = body.genres.filter((genre) => !gameById.genres.includes(genre));
      const genresDeleted = gameById.genres.filter((genre) => !body.genres.includes(genre));

      genresAdded.forEach((genre) => {
        addGameToGenre(genre, game._id);
      });

      genresDeleted.forEach((genre) => {
        removeGameFromGenre(genre, game._id);
      });
    }

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
      return res.status(404).send({ message: 'not found' });
    }

    await remove(idParam);

    gameById.genres.forEach((genre) => {
      removeGameFromGenre(genre, idParam);
    });

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
