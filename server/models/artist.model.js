const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    albums: {
      type: String,
      default: []
    },
    monthListeners: {
      type: Number,
      default: 0
    },
    isVerified: {
      type: Boolean,
      default: false
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

const ArtistModel = mongoose.model("artist", artistSchema);

module.exports = ArtistModel;