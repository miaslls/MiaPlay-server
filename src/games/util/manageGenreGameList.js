import {
  getByGenreId as getGenreGameList,
  create as createGenreGameList,
  updateByGenreId as updateGenreGameList,
  removeByGenreId as removeGenreGameList,
} from '../../genreGameLists/genreGameLists.service.js';

const addGameToGenreGameList = async (genre, game) => {
  const genreGameListToUpdate = await getGenreGameList(genre);

  if (!genreGameListToUpdate) {
    const genreGameListBody = { genre: genre, games: [game] };

    await createGenreGameList(genreGameListBody);
  } else {
    if (!genreGameListToUpdate.games.includes(game)) {
      genreGameListToUpdate.games.push(game);
    }

    const genreGameListBody = { games: genreGameListToUpdate.games };
    await updateGenreGameList(genre, genreGameListBody);
  }
};

const removeGameFromGenreGameList = async (genre, game) => {
  const genreGameListToUpdate = await getGenreGameList(genre);

  // 🚨

  if (genreGameListToUpdate.games.length > 0) {
    const genreGamesStringIds = [];

    genreGameListToUpdate.games.forEach((game) => {
      genreGamesStringIds.push(game._id.toString());
    });

    const deletedGameindex = genreGamesStringIds.indexOf(game);
    genreGamesStringIds.splice(deletedGameindex, 1);

    if (genreGamesStringIds.length > 0) {
      const genreBody = { games: genreGamesStringIds };
      await updateGenreGameList(genre, genreBody);
    } else {
      await removeGenreGameList(genre);
    }

    // 🚨
  } else {
    await removeGenreGameList(genre);
  }
};

export { addGameToGenreGameList, removeGameFromGenreGameList };
