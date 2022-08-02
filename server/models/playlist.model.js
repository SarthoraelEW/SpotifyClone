const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: ""
    },
    titles: {
      type: [{
        title: String,
        addDate: String
      }],
      default: []
    },
    isPrivate: {
      type: Boolean,
      default: false
    },
    picture: {
      type: String,
      default: ""
    },
  },
  {
    timestamps: true
  }
);

const PlaylistModel = mongoose.model("playlist", playlistSchema);

module.exports = PlaylistModel;