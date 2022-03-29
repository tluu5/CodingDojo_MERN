const express = require("express");
const app = express();
const port = 2009;
const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/job.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port} is a new way like to be!`));