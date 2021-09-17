const db = require("../models");
const Song = db.songs;
/**
 * Song repository
 */
const SongRepository = {
  findAll: () => {
    return Song.findAll();
  },
  findById: (id) => {
    const song = Song.findByPk(id);
    return song;
  },
  findByArtist: (artist) => {
    const song = Song.findAll({ where: { auteur:artist } });
    return song;
  },
  create: (song) => {
    return Song.create(song);
  },
  update: (id, song) => {
    return Song.update(song, { where: { id: id } });
  },
};

module.exports = SongRepository;
