const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    musicFile: {
      type: String,
      required: true
    },
    lyricsFile: {
      type: String,
      required: true
    },
    composer: {
      type: String,
      required: true
    },
    producer: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    nbListening: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const MusicModel = mongoose.model("music", musicSchema);

module.exports = MusicModel;