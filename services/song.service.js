const SongRepository = require("../repositories/song.repository");

/**
 * Song service
 */

const SongService = {
  findAll: async () => {
    return await SongRepository.findAll();
  },
  findById: async (id) => {
    const song = await SongRepository.findById(id);
    return song;
  },
  findByArtist: async (artist) => {
    const song = await SongRepository.findByArtist(artist);
    return song;
  },
  create: async (song) => {
    await SongRepository.create(song);
  },
  update: async (id, songInfo) => {
    const song = await SongRepository.findById(id);
    if (!song) {
      throw Error("song not found");
    }
    await SongRepository.update(id, songInfo);
  },
  sortByArtist: async () => {
    const allSong = await SongRepository.findAll();
    let returnSong = [];
    const listArtist = new Array;
    allSong.forEach(song => {
      let artist = song.auteur;
      if (!listArtist.includes(artist)) {
        listArtist.push(artist);
      }
    });
    console.log(listArtist);
    for (const artist of listArtist){
      returnSong = returnSong.concat(artist);
      let a = await SongRepository.findByArtist(artist);
      returnSong = returnSong.concat(a);
      
    }
    return returnSong;
  }
};

module.exports = SongService;
