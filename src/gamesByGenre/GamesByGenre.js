import mongoose from 'mongoose';

const GamesByGenreSchema = new mongoose.Schema(
  {
    genre: { type: mongoose.Schema.Types.ObjectId, ref: Genre },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: Game }],
  },
  { versionKey: false },
);

const GamesByGenre = mongoose.model('GamesByGenre', GamesByGenreSchema, 'games-by-genre');

export default GamesByGenre;
