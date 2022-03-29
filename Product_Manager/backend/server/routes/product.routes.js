const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

module.exports = app => {
    app.get("/api/test", ProductController.testResponse);
    app.get("/api/products/findAll", ProductController.findAll);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOne);
    app.delete("/api/products/:id", ProductController.deleteOne);
    app.patch("/api/products/:id/edit", ProductController.updateOne);
}
