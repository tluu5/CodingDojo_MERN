const express = require("express");
const app = express();
const port = 2006;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/joke.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port} is a new way like to be!`));