'use strict';

import mongoose from 'mongoose';

export const validGenreId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

export const validGenreBody = (req, res, next) => {
  let { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};
