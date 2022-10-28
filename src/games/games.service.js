import Game from './Game.js';

export const getAll = () => Game.find().populate('categories');

export const add = (body) => Game.create(body);

export const findById = (id) => Game.findById(id).populate('categories');

export const update = (id, body) =>
  Game.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('categories');

export const remove = (id) => Game.findByIdAndDelete(id);
