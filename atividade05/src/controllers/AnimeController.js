const animeService = require("../services/AnimeService");

class AnimeController {
  getAll(_, res) {
    const animes = animeService.getAllAnimes();
    return res.json(animes);
  }

  getById(req, res) {
    const { id } = req.params;

    const anime = animeService.getAnimeById(id);

    if (anime) {
      return res.json(anime);
    } else {
      return res.status(404).json({ message: "Anime não encontrado" });
    }
  }

  add(req, res) {
    const data = req.body;
    const newAnime = animeService.addAnime(data);

    return res.status(201).json(newAnime);
  }

  update(req, res) {
    const { id } = req.params;
    const data = req.body;

    const updatedAnime = animeService.updateAnime(id, data);

    if (updatedAnime) {
      return res.json({ message: `${data.name} atualizado com sucesso` });
    } else {
      return res.status(404).json({ message: "Anime não existe" });
    }
  }

  delete(req, res) {
    const { id } = req.params;
    animeService.deleteAnime(id);

    return res.json({ message: "Anime deletado com sucesso" });
  }
}

module.exports = new AnimeController();
