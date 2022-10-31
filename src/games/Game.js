import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    cover_imgUrl: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    imdbScore: { type: Number, required: true },
    trailer_youTubeUrl: { type: String, required: true },
    gameplay_youTubeUrl: { type: String, required: true },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false },
);

const Game = mongoose.model('Game', GameSchema, 'games');

export default Game;
