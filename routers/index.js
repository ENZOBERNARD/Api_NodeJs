const express = require("express");
const router = express.Router();
const SongRouter = require("./songs.router");
const artistRouter = require("./artists.router");
const API_Songs = `/songs`;

router.use(API_Songs, SongRouter);
router.use(`/artists`,artistRouter);

module.exports = router;
