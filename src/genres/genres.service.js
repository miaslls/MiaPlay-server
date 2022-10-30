import Genre from './Genre.js';

export const getAll = () => Genre.find();

export const add = (body) => Genre.create(body);

export const findById = (id) => Genre.findById(id);

export const update = (id, body) =>
  Genre.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });

export const remove = (id) => Genre.findByIdAndDelete(id);
