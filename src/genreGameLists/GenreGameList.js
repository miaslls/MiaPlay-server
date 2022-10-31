import mongoose from 'mongoose';

const GenreGameListSchema = new mongoose.Schema(
  {
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', unique: true },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  },
  { versionKey: false },
);

const GenreGameList = mongoose.model('GenreGameList', GenreGameListSchema, 'genre-game-list');

export default GenreGameList;
