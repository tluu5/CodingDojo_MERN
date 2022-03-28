const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: [true, "you need an ice cream flavor!!!"],
        minLength: [4, "you need at least 4 characters for flavor"],
        validate:{
            validator: (input) => {
                return !input.toUpperCase().includes("CHOCOLATE");
            },
            message: "Death to chocolate!"
        }
    },
    numScoops:{
        type: Number,
        required: [true, "you need scoops!"],
        max: [10, "woah slow down there!"]
    },
    whipped:{
        type: Boolean,
        required: [true, "you need to specify if it has whipped cream"]
    },
    name:{
        type: String,
        required: [true, "you need a name!"],
        minLength: [4, "make a longer name, 4 characters required"]
    },
    toppings: [String]
}, {timestamps:true})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;