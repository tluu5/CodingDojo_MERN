const express = require("express");
const app = express();
const port = 2005;
const cors = require("cors");
app.use(cors());

// app.get("/api/test", (req,res)=>{
//     res.json({message: "hey it's me!"});
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/sundae.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port} is a new way like to be!`));