'use strict';

import mongoose from 'mongoose';

export const validGameId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

export const validGameBody = (req, res, next) => {
  let {
    title,
    cover_imgUrl,
    year,
    description,
    imdbScore,
    trailer_youTubeUrl,
    gameplay_youTubeUrl,
    genres,
  } = req.body;

  if (
    !title ||
    !cover_imgUrl ||
    !year ||
    !description ||
    !imdbScore ||
    !trailer_youTubeUrl ||
    !gameplay_youTubeUrl ||
    genres === []
  ) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};
