const JobController = require("../controllers/job.controller");
const Job = require("../models/job.model");

module.exports = app => {
    app.get("/api/test", JobController.testResponse);
    app.get("/api/jobs/findAll", JobController.findAll);
    app.post("/api/jobs/create", JobController.createJob);
    app.get("/api/jobs/:id", JobController.findOne);
    app.delete("/api/jobs/:id", JobController.deleteOne);
    app.patch("/api/jobs/:id/edit", JobController.updateOne);
}
