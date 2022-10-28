import Game from './Game.js';

export const getAll = () => Game.find().populate('genres');

export const add = (body) => Game.create(body).populate('genres');

export const findById = (id) => Game.findById(id).populate('genres');

export const update = (id, body) =>
  Game.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('genres');

export const remove = (id) => Game.findByIdAndDelete(id);
