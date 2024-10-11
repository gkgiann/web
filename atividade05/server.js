const app = require("./app");
const { randomUUID } = require("node:crypto");

app.listen(3333, () => console.log("Server running.."));

const animes = [
  {
    id: "d90dcb64-1749-47ed-8c1e-bc06ce99f53a",
    name: "Kimetsu no Yaiba",
    genre: "Ação",
    studio: "Ufotable",
  },
  {
    id: "122d6641-a972-4399-bebd-610a84f7afef",
    name: "Haikyuu",
    genre: "Esporte",
    studio: "Production I.G",
  },
  {
    id: "3bd3621d-8569-48cf-bcad-994868685ddc",
    name: "One Punch Man",
    genre: "Comédia",
    studio: "Madhouse",
  },
];

app.get("/animes", (_, res) => res.status(200).json({ animes }));

app.get("/animes/:id", (req, res) => {
  const { id } = req.params;
  const anime = animes.find((anime) => anime.id === id);

  if (!anime) {
    return res.status(404).json({ message: "Anime does not exist." });
  }

  res.status(200).json({ anime });
});

app.post("/animes", (req, res) => {
  const { name, genre, studio } = req.body;

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newAnime = { id: randomUUID(), name, genre, studio };
  animes.push(newAnime);

  res.status(201).json({ newAnime });
});

app.put("/animes/:id", (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const animeToUpdate = animes.find((anime) => anime.id === id);

  if (!animeToUpdate) {
    return res.status(404).json({ message: "Anime does not exist." });
  }

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: "All fields are required." });
  }

  animeToUpdate.name = name;
  animeToUpdate.genre = genre;
  animeToUpdate.studio = studio;

  res.status(200).json({ animeUpdated: animeToUpdate });
});

app.delete("/animes/:id", (req, res) => {
  const { id } = req.params;
  const animeIndex = animes.findIndex((anime) => anime.id === id);

  if (animeIndex === -1) {
    return res.status(404).json({ message: "Anime does not exist." });
  }

  animes.splice(animeIndex, 1);

  res.status(200).end();
});
