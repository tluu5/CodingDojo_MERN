const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    flavor: String,
    numScoops: Number,
    whipped: Boolean,
    name: String,
    toppings: [String]
})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;