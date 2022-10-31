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

  const deletedGameindex = genreGameListToUpdate.games.indexOf(game);
  genreGameListToUpdate.games.splice(deletedGameindex, 1);

  if (genreGameListToUpdate.games.length === 0) {
    await removeGenreGameList(genre);
  } else {
    const genreBody = { games: genreGameListToUpdate.games };
    await updateGenreGameList(genre, genreBody);
  }
};

export { addGameToGenreGameList, removeGameFromGenreGameList };
