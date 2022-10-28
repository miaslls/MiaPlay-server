import Genre from './Genre.js';

export const getAll = () => Genre.find().populate('games');

export const add = (body) => Genre.create(body).populate('games');

export const findById = (id) => Genre.findById(id).populate('games');

export const update = (id, body) =>
  Genre.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('games');

export const remove = (id) => Genre.findByIdAndDelete(id);
