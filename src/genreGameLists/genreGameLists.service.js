import GenreGameList from './GenreGameList.js';

export const getAll = () => GenreGameList.find().populate('genre', 'games');

export const create = (body) => GenreGameList.create(body);

export const getByGenreId = (genreId) => GenreGameList.find({ genre: { _id: genreId } });

export const updateByGenreId = (genreId) =>
  GenreGameList.findOneAndUpdate({ genre: { _id: genreId } });

export const removeByGenreId = (genreId) => GenreGameList.remove({ genre: { _id: genreId } });
