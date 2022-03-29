const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("yo your're connected to the datatbase"))
    .catch(err=>console.log("beep boop, db connection was flop", err))