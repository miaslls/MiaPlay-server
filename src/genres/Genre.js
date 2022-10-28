import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  },
  { versionKey: false },
);

const Genre = mongoose.model('Genre', GenreSchema, 'genres');

export default Genre;
