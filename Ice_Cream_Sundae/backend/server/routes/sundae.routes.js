const SundaeController = require("../controllers/sundae.controller");
const Sundae = require("../models/sundae.model");

module.exports = app => {
    app.get("/api/test", SundaeController.testResponse);
    app.get("/api/sundaes/findAll", SundaeController.findAll);
    app.post("/api/sundaes/create", SundaeController.createSundae);
    app.get("/api/sundaes/:id", SundaeController.findOne);
    app.delete("/api/sundaes/:id", SundaeController.deleteOne);
    app.patch("/api/sundaes/:id", SundaeController.updateOne)
    app.put("/api/sundaes/:id/addTopping", SundaeController.addTopping);
}