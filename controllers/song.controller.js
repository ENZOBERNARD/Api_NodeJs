const SongService = require("../services/song.service");
const SongController = {
  findAll: async (req, res, next) => {
    const songs = await SongService.findAll();
    console.log(songs);
    res.status(200).send(songs);
  },
  findById: async (req, res, next) => {
    const songId = req.params.id;
    const song = await SongService.findById(songId);
    res.status(200).send(song);
  },
  findByArtist: async (req, res, next) => {
    const query = req.query.q;
    const song = await SongService.findByArtist(query);
    res.status(200).send(song);
  },
  create: async (req, res, next) => {
    const song = req.body;
    await SongService.create(song);
    res.status(200).send({ message: "song created successfully" });
  },
  update: async (req, res, next) => {
    const songId = req.params.id;
    const songInfo = req.body;
    try {
      await SongService.update(songId, songInfo);
      res.status(200).send({ message: "song updated successfully" });
    } catch (error) {
      res.status(404).send({ message: `song with id - ${songId} not found` });
    }
  },
  sortByArtist: async (req,res,next) => {
    const song = await SongService.sortByArtist();
    res.status(200).send(song);
  }
};

module.exports = SongController;
