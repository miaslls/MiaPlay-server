import GenreGameList from './GenreGameList.js';

export const getAll = () => GenreGameList.find().populate('genre').populate('games');

export const create = (body) => GenreGameList.create(body);

export const getByGenreId = (genreId) =>
  GenreGameList.findOne({ genre: { _id: genreId } })
    .populate('genre')
    .populate('games');

export const updateByGenreId = (genreId, body) =>
  GenreGameList.findOneAndUpdate({ genre: { _id: genreId } }, body)
    .setOptions({ returnOriginal: false })
    .populate('genre')
    .populate('games');

export const removeByGenreId = (genreId) =>
  GenreGameList.findOneAndRemove({ genre: { _id: genreId } });
