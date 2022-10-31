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

// FIXME: FUCK! is it fixed?

const removeGameFromGenreGameList = async (genre, game) => {
  // console.log('genre', genre); // 🐞
  // console.log('game', game); // 🐞

  const genreGameListToUpdate = await getGenreGameList(genre);

  // console.log(genreGameListToUpdate); // 🐞

  const genreGamesStringIds = [];

  genreGameListToUpdate.games.forEach((game) => {
    genreGamesStringIds.push(game._id.toString());
  });

  // console.log(genreGamesStringIds); // 🐞

  const deletedGameindex = genreGamesStringIds.indexOf(game);

  // console.log(deletedGameindex, game); // 🐞

  genreGamesStringIds.splice(deletedGameindex, 1);

  // console.log(genreGamesStringIds); // 🐞

  if (genreGamesStringIds.length > 0) {
    const genreBody = { games: genreGamesStringIds };
    await updateGenreGameList(genre, genreBody);
  } else {
    await removeGenreGameList(genre);
  }
};

export { addGameToGenreGameList, removeGameFromGenreGameList };
