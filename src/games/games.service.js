import Game from './Game.js';

export const getAll = () => Game.find().populate('genres');

export const create = (body) => Game.create(body);

export const getById = (id) => Game.findById(id).populate('genres');

export const update = (id, body) =>
  Game.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('genres');

export const remove = (id) => Game.findByIdAndDelete(id);
