const { randomUUID } = require("node:crypto");
const Anime = require("../models/AnimeModel");

let animes = [
  new Anime(
    "d90dcb64-1749-47ed-8c1e-bc06ce99f53a",
    "Kimetsu no Yaiba",
    "Ação",
    "Ufotable"
  ),
  new Anime(
    "122d6641-a972-4399-bebd-610a84f7afef",
    "Haikyuu",
    "Esporte",
    "Production I.G"
  ),
  new Anime(
    "3bd3621d-8569-48cf-bcad-994868685ddc",
    "One Punch Man",
    "Comédia",
    "Madhouse"
  ),
];

class AnimeRepository {
  getAll() {
    return animes;
  }

  getById(id) {
    return animes.find((anime) => anime.id === id);
  }

  create(anime) {
    const newAnime = {
      ...anime,
      id: randomUUID(),
    };

    animes.push(newAnime);

    return newAnime;
  }

  update(id, updatedAnime) {
    let wasUpdated = false;

    animes = animes.map((anime) => {
      if (anime.id === id) {
        wasUpdated = true;

        return {
          id,
          ...updatedAnime,
        };
      }

      return anime;
    });

    return wasUpdated;
  }

  delete(id) {
    animes = animes.filter((anime) => anime.id !== id);
    return true;
  }
}

module.exports = new AnimeRepository();
