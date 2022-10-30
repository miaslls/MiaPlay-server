import { getAll, create, getById, update, remove } from './games.service.js';
import { addGameToGenreGameList, removeGameFromGenreGameList } from './util/manageGenreGameList.js';

// import {
//   getByGenreId as getGenreGameList,
//   create as createGenreGameList,
//   updateByGenreId as updateGenreGameList,
//   removeByGenreId as removeGenreGameList,
// } from '../genreGameLists/genreGameLists.service.js';

// const addGameToGenreGameList = async (genre, game) => {
//   const genreGameListToUpdate = await getGenreGameList(genre);
//
//   if (!genreGameListToUpdate) {
//     const genreGameListBody = { genre: genre, games: [game] };
//
//     await createGenreGameList(genreGameListBody);
//   } else {
//     if (genreGameListToUpdate.games) {
//       genreGameListToUpdate.games.push(game);
//     }
//
//     const genreGameListBody = { games: genreGameListToUpdate.games };
//     await updateGenreGameList(genre, genreGameListBody);
//   }
// };
//
// const removeGameFromGenreGameList = async (genre, game) => {
//   const genreGameListToUpdate = await getGenre(genre);
//
//   const deletedGameindex = genreGameListToUpdate.games.indexOf(game);
//   genreGameListToUpdate.games.splice(deletedGameindex, 1);
//
//   if (genreGameListToUpdate.games.length === 0) {
//     removeGenreGameList(genre);
//   } else {
//     const genreBody = { games: genreGameListToUpdate.games };
//     await updateGenre(genre, genreBody);
//   }
// };

// 📌

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

    if (gameById.genres !== body.genres) {
      const genresAdded = body.genres.filter((genre) => !gameById.genres.includes(genre));
      const genresDeleted = gameById.genres.filter((genre) => !body.genres.includes(genre));

      genresAdded.forEach((genre) => {
        addGameToGenreGameList(genre, idParam);
      });

      genresDeleted.forEach((genre) => {
        removeGameFromGenreGameList(genre._id, idParam);
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

    const gameById = await getById(idParam);

    if (!gameById) {
      return res.status(404).send({ message: 'not found' });
    }

    await remove(idParam);

    gameById.genres.forEach((genre) => {
      removeGameFromGenreGameList(genre._id, idParam);
    });

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
