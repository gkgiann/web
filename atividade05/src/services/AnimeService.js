const Anime = require("../models/AnimeModel");
const repository = require("../repositories/AnimeRepository");

class AnimeService {
  getAllAnimes() {
    return repository.getAll();
  }

  getAnimeById(id) {
    return repository.getById(id);
  }

  addAnime(data) {
    const { name, genre, studio } = data;
    const newAnime = new Anime(null, name, genre, studio);

    return repository.create(newAnime);
  }

  updateAnime(id, data) {
    return repository.update(id, data);
  }

  deleteAnime(id) {
    return repository.delete(id);
  }
}

module.exports = new AnimeService();
