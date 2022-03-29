const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required."],
        minLength: [3, "Title must be at least 3 characters."]
    },
    price:{
        type: Number,
        min: [1, "Don't sell yourself too short!"]
    },
    description:{
        type: String,
        required: [true, "Description is required."],
        minLength: [3, "Description must be at least 3 characters."]
    }
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;