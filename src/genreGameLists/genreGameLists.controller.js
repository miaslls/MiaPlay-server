import {
  getAll,
  // create,
  // getByGenreId,
  // updateByGenreId,
  // removeByGenreId,
} from './genreGameLists.service.js';

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

// export const createGenreGameList = async (req, res) => {
//   try {
//     const body = req.body;
//     const genreGameList = await create(body);
//
//     res.send(genreGameList);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };
//
// export const getGenreGameListByGenreId = async (req, res) => {
//   try {
//     const genreId = req.params.genreId;
//
//     const genreGameList = await getByGenreId(genreId);
//
//     if (!genreGameList) {
//       return res.status(404).send({ message: 'not found' });
//     }
//
//     res.send(genreGameList);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };
//
// export const updateGenreGameListbyGenreId = async (req, res) => {
//   try {
//     const genreId = req.params.genreId;
//     const body = req.body;
//
//     const genreGameListByGenreId = await getByGenreId(genreId);
//
//     if (!genreGameListByGenreId) {
//       return res.status(404).send({ message: 'not found' });
//     }
//
//     const genreGameList = await updateByGenreId(genreId, body);
//
//     res.send(genreGameList);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };
//
// export const removeGenreGameListByGenreId = async (req, res) => {
//   try {
//     const genreId = req.params.genreId;
//
//     const genreGameListByGenreId = await getByGenreId(genreId);
//
//     if (!genreGameListByGenreId) {
//       return res.status(404).send({ message: 'not found' });
//     }
//
//     await removeByGenreId(genreId);
//
//     res.send({ message: 'deleted' });
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };
