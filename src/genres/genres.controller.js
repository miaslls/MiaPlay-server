import { getAll, add, findById, update, remove } from './genres.service.js';

export const getAllGenres = async (req, res) => {
  try {
    const genres = await getAll();

    if (!genres) {
      return res.status(404).send({ message: 'not found' });
    }

    const genreNamesAndIds = [];

    genres.forEach((genre) => {
      genreNamesAndIds.push({ name: genre.name, _id: genre._id });
    });

    res.send({ simpleGenres: genreNamesAndIds, genres });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addGenre = async (req, res) => {
  try {
    const body = req.body;

    const genre = await add(body);

    res.send(genre);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findGenreById = async (req, res) => {
  try {
    const idParam = req.params.id;

    const genre = await findById(idParam);

    if (!genre) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send(genre);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const genreById = await findById(idParam);

    if (!genreById) {
      return res.status(404).send({ message: 'not found' });
    }

    const genre = await update(idParam, body);

    res.send(genre);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const idParam = req.params.id;

    const genreById = await findById(idParam);

    if (!genreById) {
      return res.status(404).send({ message: 'not found' });
    }

    if (genreById.games.length > 0) {
      return res.status(405).send({ message: 'cannot delete' });
    }

    await remove(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
