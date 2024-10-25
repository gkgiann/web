const app = require("./app");
const animeController = require("./controllers/AnimeController");

app.get("/animes", animeController.getAll);
app.get("/animes/:id", animeController.getById);
app.post("/animes", animeController.add);
app.put("/animes/:id", animeController.update);
app.delete("/animes/:id", animeController.delete);

app.listen(3333, () => {
  console.log(`Server running...`);
});
