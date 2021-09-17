const express = require("express");
const artistRouter = express.Router();
const SongController = require("../controllers/song.controller");

const API_SONGS_PARAM_ARTISTS = "/artists";

// Begin Router
artistRouter
  .route("/")
  .get(SongController.sortByArtist);



// end Router
module.exports = artistRouter;
