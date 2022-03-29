const Job = require("../models/job.model");

module.exports.testResponse = (req,res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req,res) => {
    Job.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.createJob = (req,res) => {
    Job.create(req.body)
        .then(newJob => res.json(newJob))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.findOne = (req,res) => {
    Job.findOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.deleteOne = (req,res) => {
    Job.deleteOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateOne = (req,res) => {
    Job.updateOne({_id: req.params.id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}