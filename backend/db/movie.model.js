const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
    minlength: 2,
    index: true
  },
  originalTitle: {
    type: String,
    required: true,
    unique: false,
    minlength: 2
  },
  adult: Boolean,
  backdropPath: {
    type: String,
    required: false,
    unique: true
  },
  budget: {
    type: Number,
    unique: false,
    default: 0
  },
  genres: {
    type: [{
      id: Number,
      name: String
    }],
  },
  tmdbId: {
    type: Number,
    unique: true
  },
  imdbId: {
    type: String,
    unique: true
  },
  originalLanguage: String,
  overview: {
    type: String,
    required: false
  },
  posterPath: {
    type: String,
    rquired: false
  },
  productionCompanies: {
    type: [{
      id: Number,
      logoPath: String,
      name: {
        type: String,
        required: false
      },
      originCountry: String
    }],
  },
  production_country: {
    type: [String],
  },
  releaseDate: Date,
  revenue: Number,
  runtime: {
    type: Number,
    required: false
  },
  spokenLanguages: {
    type: [String]
  },
  status: String,
  tagline: String,
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

