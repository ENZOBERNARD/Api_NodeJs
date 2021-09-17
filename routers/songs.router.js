const express = require("express");
const songRouter = express.Router();
const SongController = require("../controllers/song.controller");
const { validate } = require("express-validation");
const SongValidator = require("../validators/song.validators");

const API_SONGS_PARAM_ID = "/:id";
const API_SONGS_PARAM_ARTIST = "/artist";

// Begin Router
songRouter
  .route("/")
  .get(SongController.findAll)
  .post(SongController.create);

  songRouter
  .route(API_SONGS_PARAM_ARTIST)
  .get(SongController.findByArtist);


songRouter
  .route(API_SONGS_PARAM_ID)
  .get(SongController.findById)
  .put(SongController.update);




// end Router
module.exports = songRouter;
