const Joke = require("../models/joke.model");

module.exports.testResponse = (req,res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req,res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.findOne = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.newJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateOne = (req,res) => {
    Joke.updateOne({_id: req.params.id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.deleteOne = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}
