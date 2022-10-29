import {
  getAll,
  create,
  getByGenreId,
  updateByGenreId,
  removeByGenreId,
} from './genreGameLists.service.js';

/*
try {

 } catch (err) {
    res.status(500).send({ message: err.message });
 }
*/ // 🐞

export const getAllGenreGameLists = async (req, res) => {
  try {
    const genreGameLists = await getAll();

    if (!genreGameLists) {
      res.status(404).send({ message: 'not found' });
    }

    res.send(genreGameLists);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
