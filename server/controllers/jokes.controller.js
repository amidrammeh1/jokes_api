const Joke = require("../models/jokes.models")


module.exports = {
  findAll(req, res) {
    Joke.find()
    .then((Jokes) => {res.json(Jokes)})
    .catch((error) => {res.json(error)})
  }
}