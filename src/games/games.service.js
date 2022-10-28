import Game from './Game.js';

export const getAll = () => Game.find().populate('genres');

export const add = (body) => Game.create(body);

export const findById = (id) => Game.findById(id);

export const update = (id, body) =>
  Game.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });

export const remove = (id) => Game.findByIdAndDelete(id);
