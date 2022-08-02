const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    titles: {
      type: String,
      default: []
    },
    source: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const AlbumModel = mongoose.model("album", albumSchema);

module.exports = AlbumModel;