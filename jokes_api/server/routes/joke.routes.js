const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/jokes/findAll", JokeController.findAll);
    app.get("/api/jokes/:id", JokeController.findOne);
    // app.get("/api/jokes/random", JokeController.randomJoke);
    app.post("/api/jokes/new", JokeController.newJoke);
    app.patch("/api/jokes/update/:id", JokeController.updateOne);
    app.delete("/api/jokes/delete/:id", JokeController.deleteOne);
}